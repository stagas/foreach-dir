import * as child_process from 'child_process'
import { arg, decarg } from 'decarg'
import * as fs from 'fs/promises'
import * as os from 'os'
import * as path from 'path'

export class Options {
  @arg('[dirs]', 'Dirs to run command in')
  dirs: string[] = []

  @arg('--', '[command with args]', 'Command to execute')
  command: string[] = []

  @arg('-c', '--concurrency', 'Maximum concurrent tasks.')
  concurrency: number = os.cpus().length * 3

  @arg('-n', '--newer', 'Newer after certain date.')
  newer = ''

  @arg('--dry-run', 'Dry run.')
  dryRun = false

  constructor(options: Partial<Options> = {}) {
    Object.assign(this, options)
  }
}

export const run = async (options: Options) => {
  process.setMaxListeners(Infinity)

  if (!options.command.length || !options.dirs.length)
    decarg(new Options(), process.argv.slice(1).concat(['--help']))
  else {
    const finish = async () => {
      console.log('all done.')
    }

    const tasks: (() => Promise<void>)[] = []
    const maxNumberOfTasks = options.concurrency
    let currentNumberOfTasks = 0

    const flush = () => {
      if (tasks.length > 0 && currentNumberOfTasks < maxNumberOfTasks) {
        currentNumberOfTasks++
        tasks.shift()!().catch(console.error).finally(() => {
          currentNumberOfTasks--
          if (!--remainingTasks)
            finish()
          else
            flush()
        })
        flush()
      }
    }

    for (const target of options.dirs) {
      tasks.push(async () => {
        const resolved = path.resolve(target)
        if (options.newer !== '') {
          const stat = await fs.stat(resolved)
          if (new Date(stat.birthtime).getTime() < new Date(options.newer).getTime())
            return
        }
        console.log('running:', options.command[0], options.command.slice(1), 'IN', path.resolve(target))
        if (!options.dryRun) {
          await new Promise(resolve => {
            const child = child_process.spawn(options.command[0], options.command.slice(1), {
              cwd: path.resolve(target),
              stdio: 'inherit',
              killSignal: 'SIGINT',
            })
            process.on('SIGINT', () => {
              console.error('interrupted')
              child.kill('SIGINT')
              process.exit(1)
            })
            child.on('exit', resolve)
          })
        }
      })
    }

    let remainingTasks = tasks.length
    flush()
  }
}
