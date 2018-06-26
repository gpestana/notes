## POSIX, pipes, stdin and nodejs

On how to turn your nodejs app compliant with POSIX pipes safely.

In Nodejs, `process.argv` property returns an array containing the command line
arguments when the node process was launched. The first element is the 
`process.execPath` (absolute pathname of the executable that started the nodejs
process, e.g. `/usr/local/bin/node`), the second element contains the path of
the js file executed and remaining elements in the array will be the command
line arguments.

For example, the following command: 

```$ node cli.js argument1 -d argument2```

Will spawn a Nodejs process with the following `process.argv`:

```['/usr/local/bin/node', '/Users/gpestana/dev/cli.js', 'argument1', '-d', 'argument2'] ```

There are many modules which implement nifty ways to handle and parse command
line arguments such as [yargs](http://yargs.js.org/) and 
[commander](https://github.com/tj/commander.js/). 

Unix supports a powerful way to pass data between processes through pipes. Put
simply, Pipes let you redirect the output of a process as input of another one.
Pipes are widely used in the unix context and it ....
In Nodejs, when piping data as input the the node process, the data is passed
to the stdin file descriptor. To read the stdin file description is not as
straight forward as one could think, and there are some tricks 

### Sync read from stdin

Why sync? To load stdin data in the `process.argv` to be treated by the CLI 
parser as an argument.

One way to read from stdin is:

`stdin = require('fs').readFileSync('/dev/stdin').toString();`

It turns out that readFileSync uses the stat utility to get the size of the
file to read. It is not possible to know the size of the content of the stdin
file description before is has been received and read. Thus, readFileSync
will make assumptions about the size of the file. This might be a problem in
some platforms. Another problem is that `process.stdin` is exposed as a stream
in Nodejs. Streams are powerful abstractions but do not play wexposed as a stream
in Nodejs. Streams are powerful abstractions but do not play well with sync
operations..

