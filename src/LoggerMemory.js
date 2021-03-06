import LoggerInterface from './LoggerInterface'

/**
 * Implements a default logger. It will store all the logEntries in Memory.
 * if 'writeConsole' is set  to true, it will also output the logs to the console.
 * This logger is mainly used for debugging and development.
 * @extends LoggerInterface
 */
export default class LoggerMemory extends LoggerInterface {
  constructor(opts = {}) {
    super()

    /** {boolean} Defines if the log entry should also be loged to the console. Default is not to write to console */
    this.writeConsole = false
    if (opts.writeConsole !== undefined) {
      this.writeConsole = opts.writeConsole
    }

    // initializes the arrays
    this.clear()
  }

  /**
   * Clears all the existing log entries
   */
  async clear() {
    this.entries = {
      debug: [],
      info: [],
      warning: [],
      error: [],
      fatal: [],
    }
  }

  /**
   * Writes the log, or do what ever. At this point in time
   * the logs with the wrong level arte already filtered
   * @param level {string} The log level of the current entry
   * @param entry {string|object} The data to log
   */
  async _writeLog(level, entry) {
    if (this.entries[level] !== undefined) {
      this.entries[level].push(entry)
    }

    if (this.writeConsole) {
      // eslint-disable-next-line no-console
      console.log(
        `${this._getTime()} ${level.toUpperCase()}: ${JSON.stringify(
          entry,
          null,
          2
        )}`
      )
    }
  }
}
