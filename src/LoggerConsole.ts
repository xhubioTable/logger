import { type LoggerInterface } from './LoggerInterface'
import { LogLevel, logLevelToString } from './constants'
import { getTime } from './getTime'

interface LoggerConsoleOptions {
  /** The current log level of the logger */
  logLevel?: LogLevel
}

/**
 * This logger stores all the Logs in Memory.
 * This logger is mainly for unit tests
 */
export class LoggerConsole implements LoggerInterface {
  /** The current log level of the logger */
  logLevel: LogLevel = LogLevel.error

  /** If a log with error or above was created, this flag is set to true */
  hasError = false

  constructor(opts?: LoggerConsoleOptions) {
    if (opts?.logLevel !== undefined) {
      this.logLevel = opts.logLevel
    }
    this.hasError = false
  }

  public clear(): void {
    this.hasError = false
  }

  public async debug(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.debug) {
      this.writeLog(message, LogLevel.debug)
    }
  }

  public async info(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.info) {
      this.writeLog(message, LogLevel.info)
    }
  }

  public async warning(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.warning) {
      this.writeLog(message, LogLevel.warning)
    }
  }

  public async error(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.error) {
      this.hasError = true
      this.writeLog(message, LogLevel.error)
    }
  }

  public async fatal(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.fatal) {
      this.hasError = true
      this.writeLog(message, LogLevel.fatal)
    }
  }

  /**
   * Writes the log, or do what ever. At this point in time
   * the logs with the wrong level arte already filtered
   * @param store - an Array to store the log
   * @param entry - The data to be logged
   */
  protected writeLog(entry: any, logLevel: LogLevel): void {
    let message
    const levelString = logLevelToString(logLevel)
    if (typeof entry === 'string') {
      message = { message: entry, logLevel: levelString }
    } else {
      message = Object.assign({ logLevel: levelString }, entry)
    }

    // eslint-disable-next-line no-console
    console.log(
      `${getTime()} ${levelString}: ${JSON.stringify(message, null, 2)}`
    )
  }
}
