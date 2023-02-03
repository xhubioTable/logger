/**
 * Defines the valid log level
 */
export enum LogLevel {
  debug = 0,
  info = 1,
  warning = 2,
  error = 3,
  fatal = 4
}

export function logLevelToString(logLevel: LogLevel): string {
  if (logLevel === LogLevel.debug) {
    return 'debug'
  } else if (logLevel === LogLevel.info) {
    return 'info'
  } else if (logLevel === LogLevel.warning) {
    return 'warning'
  } else if (logLevel === LogLevel.error) {
    return 'error'
  } else if (logLevel === LogLevel.fatal) {
    return 'fatal'
  }
  return 'error'
}
