import { type LogLevel } from './constants'

/**
 * Defines the Logger
 */
export interface LoggerInterface {
  /** The current log level */
  logLevel: LogLevel

  /** If a log with error or above was created, this flag is set to true */
  hasError: boolean

  /**
   * Logs a message or on object with the loglevel debug
   * @param message - A string or an json object to be logged
   */
  debug: (message: any) => Promise<void>

  /**
   * Logs a message or on object with the loglevel debug
   * @param message - A string or an json object to be logged
   */
  info: (message: any) => Promise<void>

  /**
   * Logs a message or on object with the loglevel debug
   * @param message - A string or an json object to be logged
   */
  warning: (message: any) => Promise<void>

  /**
   * Logs a message or on object with the loglevel debug
   * @param message - A string or an json object to be logged
   */
  error: (message: any) => Promise<void>

  /**
   * Logs a message or on object with the loglevel debug
   * @param message - A string or an json object to be logged
   */
  fatal: (message: any) => Promise<void>
}
