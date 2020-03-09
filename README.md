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
* [Development](#development)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g megit
$ megit COMMAND
running command...
$ megit (-v|--version|version)
megit/0.1.0 darwin-x64 node-v13.8.0
$ megit --help [COMMAND]
USAGE
  $ megit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`megit help [COMMAND]`](#megit-help-command)
* [`megit open`](#megit-open)

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

## `megit open`

Open an issue in the default web browser

```
USAGE
  $ megit open
```

_See code: [src/commands/open.ts](https://github.com/greganswer/megit/blob/v0.1.0/src/commands/open.ts)_
<!-- commandsstop -->

# Development

1. Generate a command using the [oclif command generator](https://oclif.io/docs/generator_commands)
1. Write an [oclif test](https://oclif.io/docs/testing)
1. Write an [oclif command](https://oclif.io/docs/commands) 
1. Use the [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) library to ask for user input
1. Use the [listr](https://github.com/SamVerschueren/listr) library for multi step commands
1. Run `yarn test` before committing your changes
