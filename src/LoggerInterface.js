const LOG_LEVEL_NAME_TO_NUM = {
  debug: 0,
  info: 1,
  warning: 2,
  error: 3,
  fatal: 4,
}

const LOG_LEVEL_NUM_TO_NAME = ['debug', 'info', 'warning', 'error', 'fatal']

const DEFAULT_LEVEL = 3
const MAX_LEVEL = 4

/**
 * Implements a default logger. It will store all the logEntries in Memory.
 * if 'writeConsole' is set  to true, it will also output the logs to the console.
 * This logger is mainly used for debugging and development
 * @class
 */
export default class LoggerInterface {
  constructor() {
    // The current logLevel
    this._level = DEFAULT_LEVEL
  }

  /**
   * sets a new log level
   * @param level {number/string} The logLevel as number or String value
   */
  set level(level = DEFAULT_LEVEL) {
    if (typeof level === 'number') {
      if (level <= MAX_LEVEL) {
        this._level = level
      } else {
        this._level = MAX_LEVEL
      }
    } else {
      this._level = this._getLevelNumber(level)
    }
  }

  /**
   * Returns the logLevel as a string
   *
   * @return level {string} The logLevel
   */
  get level() {
    return LOG_LEVEL_NUM_TO_NAME[this._level]
  }

  /**
   * Clears all the existing log entries
   * Placeholder for the implementing loggers
   */
  async clear() {}

  /**
   * returns the logLevel as a number
   * @param level {string} The loglevel as a string
   *
   * @return num {number} The loglevel as a number
   */
  _getLevelNumber(level = DEFAULT_LEVEL) {
    if (LOG_LEVEL_NAME_TO_NUM[level] !== undefined) {
      return LOG_LEVEL_NAME_TO_NUM[level]
    }
    return DEFAULT_LEVEL
  }

  /**
   * Do the logging
   * @param level {string} The log level of the current entry
   * @param arg {string|object} The data to log
   */
  async _log(level, arg) {
    let entry

    if (typeof arg === 'string') {
      entry = { message: arg, level }
    } else {
      entry = Object.assign({ level }, arg)
    }

    if (this._getLevelNumber(level) >= this._level) {
      entry.time = this.getTime()
      return this._writeLog(level, entry)
    }
  }

  /**
   * Writes the log, or do what ever. At this point in time
   * the logs with the wrong level arte already filtered
   * @param level {string} The log level of the current entry
   * @param entry {string|object} The data to log
   */
  // eslint-disable-next-line no-unused-vars
  async _writeLog(level, entry) {
    // do nothing here
  }

  /**
   * Logs the given message
   * @param message {string/object} The message or data to log
   * @return promise {Promise} A promise when the log is written
   */
  async debug(message) {
    return this._log('debug', message)
  }
  async info(message) {
    return this._log('info', message)
  }
  async warning(message) {
    return this._log('warning', message)
  }
  async error(message) {
    return this._log('error', message)
  }
  async fatal(message) {
    return this._log('fatal', message)
  }

  getTime() {
    function fill(val) {
      if (val < 10) {
        return '0' + val
      }
      return val
    }
    const date = new Date(Date.now())
    const dateStr = `${date.getFullYear()}-${fill(date.getMonth() + 1)}-${fill(
      date.getDate()
    )}`
    const timeStr = `${fill(date.getHours())}:${fill(date.getMinutes())}:${fill(
      date.getSeconds()
    )}`
    return dateStr + ' ' + timeStr
  }
}
