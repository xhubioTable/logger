'use strict'

function getTime() {
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

/**
 * Implements a default logger. It will store all the logEntries in Memory.
 * if 'writeConsole' is set  to true, it will also output the logs to the console.
 * This logger is mainly used for debugging and development
 * @class
 */
class Logger {
  constructor() {
    this.entries = {
      info: [],
      warning: [],
      error: [],
    }
    // default is not to write to console
    this.writeConsole = false
  }

  /**
   * Clears all the existing log entries
   */
  async clear() {
    this.entries = {
      info: [],
      warning: [],
      error: [],
    }
  }

  async log(level, arg) {
    let entry

    if (typeof arg === 'string') {
      entry = { message: arg }
    } else {
      entry = Object.assign({}, arg)
    }

    entry.level = level
    entry.time = getTime()

    if (this.entries[level] !== undefined) {
      this.entries[level].push(entry)
    }
    if (this.writeConsole) {
      // eslint-disable-next-line no-console
      console.log(
        `${getTime()} ${level.toUpperCase()}: ${JSON.stringify(entry, null, 2)}`
      )
    }
  }

  /**
   * Logs the given message
   * @param message {string/object} The message or data to log
   * @return promise {Promise} A promise when the log is written
   */
  async debug(message) {
    return this.log('debug', message)
  }
  async info(message) {
    return this.log('info', message)
  }
  async warning(message) {
    return this.log('warning', message)
  }
  async error(message) {
    return this.log('error', message)
  }
  async fatal(message) {
    return this.log('fatal', message)
  }
}

// Stores the logger instance
const logger = new Logger()

export default function getLoggerMemory() {
  return logger
}
