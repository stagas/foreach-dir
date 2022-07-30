<h1>
foreach-dir <a href="https://npmjs.org/package/foreach-dir"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-76-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Run a command inside each directory serially.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i foreach-dir -g</code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add foreach-dir -g</code>
</td><td title="Triple click to select and copy paste">
<code>yarn global add foreach-dir</code>
</td></tr></table>
</h4>

## API

<p>  <details id="Options$1" title="Class" open><summary><span><a href="#Options$1">#</a></span>  <code><strong>Options</strong></code>    </summary>  <a href="src/runner.ts#L7">src/runner.ts#L7</a>  <ul>        <p>  <details id="constructor$2" title="Constructor" ><summary><span><a href="#constructor$2">#</a></span>  <code><strong>constructor</strong></code><em>(options)</em>    </summary>  <a href="src/runner.ts#L18">src/runner.ts#L18</a>  <ul>    <p>  <details id="new Options$3" title="ConstructorSignature" ><summary><span><a href="#new Options$3">#</a></span>  <code><strong>new Options</strong></code><em>()</em>    </summary>    <ul><p><a href="#Options$1">Options</a></p>      <p>  <details id="options$4" title="Parameter" ><summary><span><a href="#options$4">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Partial</span>&lt;<a href="#Options$1">Options</a>&gt;</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="command$6" title="Property" ><summary><span><a href="#command$6">#</a></span>  <code><strong>command</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href="src/runner.ts#L10">src/runner.ts#L10</a>  <ul><p>string  []</p>        </ul></details><details id="concurrency$7" title="Property" ><summary><span><a href="#concurrency$7">#</a></span>  <code><strong>concurrency</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/runner.ts#L12">src/runner.ts#L12</a>  <ul><p>number</p>        </ul></details><details id="dirs$5" title="Property" ><summary><span><a href="#dirs$5">#</a></span>  <code><strong>dirs</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href="src/runner.ts#L8">src/runner.ts#L8</a>  <ul><p>string  []</p>        </ul></details><details id="dryRun$9" title="Property" ><summary><span><a href="#dryRun$9">#</a></span>  <code><strong>dryRun</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>false</code></span>  </summary>  <a href="src/runner.ts#L16">src/runner.ts#L16</a>  <ul><p>boolean</p>        </ul></details><details id="newer$8" title="Property" ><summary><span><a href="#newer$8">#</a></span>  <code><strong>newer</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>''</code></span>  </summary>  <a href="src/runner.ts#L14">src/runner.ts#L14</a>  <ul><p>string</p>        </ul></details></p></ul></details><details id="run$10" title="Function" open><summary><span><a href="#run$10">#</a></span>  <code><strong>run</strong></code><em>(options)</em>    </summary>  <a href="src/runner.ts#L23">src/runner.ts#L23</a>  <ul>    <p>    <details id="options$12" title="Parameter" ><summary><span><a href="#options$12">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><a href="#Options$1">Options</a></p>        </ul></details>  <p><strong>run</strong><em>(options)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p>

## Credits

- [decarg](https://npmjs.org/package/decarg) by [stagas](https://github.com/stagas) &ndash; decorator based cli arguments parser

## Contributing

[Fork](https://github.com/stagas/foreach-dir/fork) or [edit](https://github.dev/stagas/foreach-dir) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
