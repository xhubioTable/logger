import { type LoggerInterface } from './LoggerInterface'
import { LogLevel, logLevelToString } from './constants'
import { getTime } from './getTime'

interface LoggerMemoryOptions {
  /** The current log level of the logger */
  logLevel?: LogLevel

  /** If set to a true value, each log stored is also printed to console */
  writeConsole?: boolean
}

/**
 * This logger stores all the Logs in Memory.
 * This logger is mainly for unit tests
 */
export class LoggerMemory implements LoggerInterface {
  /** The current log level of the logger */
  logLevel: LogLevel = LogLevel.error

  /** If set to a true value, each log stored is also printed to console */
  writeConsole = false

  /** If a log with error or above was created, this flag is set to true */
  hasError = false

  messagesDebug: any[] = []
  messagesInfo: any[] = []
  messagesWarning: any[] = []
  messagesError: any[] = []
  messagesFatal: any[] = []

  constructor(opts?: LoggerMemoryOptions) {
    if (opts?.logLevel !== undefined) {
      this.logLevel = opts.logLevel
    }
    if (opts?.writeConsole !== undefined) {
      this.writeConsole = opts.writeConsole
    }
    this.hasError = false
  }

  public clear(): void {
    this.messagesDebug = []
    this.messagesInfo = []
    this.messagesWarning = []
    this.messagesError = []
    this.messagesFatal = []
    this.hasError = false
  }

  public async debug(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.debug) {
      this.writeLog(this.messagesDebug, message, LogLevel.debug)
    }
  }

  public async info(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.info) {
      this.writeLog(this.messagesInfo, message, LogLevel.info)
    }
  }

  public async warning(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.warning) {
      this.writeLog(this.messagesWarning, message, LogLevel.warning)
    }
  }

  public async error(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.error) {
      this.hasError = true
      this.writeLog(this.messagesError, message, LogLevel.error)
    }
  }

  public async fatal(message: any): Promise<void> {
    if (this.logLevel <= LogLevel.fatal) {
      this.hasError = true
      this.writeLog(this.messagesFatal, message, LogLevel.fatal)
    }
  }

  /**
   * Writes the log, or do what ever. At this point in time
   * the logs with the wrong level arte already filtered
   * @param store - an Array to store the log
   * @param entry - The data to be logged
   */
  protected writeLog(store: any[], entry: any, logLevel: LogLevel): void {
    let message
    const levelString = logLevelToString(logLevel)
    if (typeof entry === 'string') {
      message = { message: entry, logLevel: levelString }
    } else {
      message = Object.assign({ logLevel: levelString }, entry)
    }

    store.push(message)

    if (this.writeConsole) {
      // eslint-disable-next-line no-console
      console.log(
        `${getTime()} ${levelString}: ${JSON.stringify(message, null, 2)}`
      )
    }
  }
}
