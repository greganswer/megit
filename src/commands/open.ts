import { Command } from '@oclif/command'

import open = require('open'); // https://github.com/sindresorhus/open

export default class Open extends Command {
  static description = 'Open an issue in the default web browser'

  async run() {
    this.log('Opening issue...')
    open('https://github.com/sindresorhus/open')
  }
}
