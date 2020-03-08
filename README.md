megit
=====

Run Git work flows for GitHub with issue tracking ticket numbers.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/megit.svg)](https://npmjs.org/package/megit)
[![CircleCI](https://circleci.com/gh/greganswer/megit/tree/master.svg?style=shield)](https://circleci.com/gh/greganswer/megit/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/megit.svg)](https://npmjs.org/package/megit)
[![License](https://img.shields.io/npm/l/megit.svg)](https://github.com/greganswer/megit/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g megit
$ megit COMMAND
running command...
$ megit (-v|--version|version)
megit/0.0.0 darwin-x64 node-v13.8.0
$ megit --help [COMMAND]
USAGE
  $ megit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`megit hello [FILE]`](#megit-hello-file)
* [`megit help [COMMAND]`](#megit-help-command)
* [`megit open [FILE]`](#megit-open-file)

## `megit hello [FILE]`

describe the command here

```
USAGE
  $ megit hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ megit hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/greganswer/megit/blob/v0.0.0/src/commands/hello.ts)_

## `megit help [COMMAND]`

display help for megit

```
USAGE
  $ megit help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `megit open [FILE]`

describe the command here

```
USAGE
  $ megit open [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/open.ts](https://github.com/greganswer/megit/blob/v0.0.0/src/commands/open.ts)_
<!-- commandsstop -->
