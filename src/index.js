import LoggerInterface from './LoggerInterface'
import LoggerMemory from './LoggerMemory'

export { LoggerInterface, LoggerMemory }

let loggerMemory
export function getLoggerMemory() {
  if (loggerMemory === undefined) {
    loggerMemory = new LoggerMemory()
  }
  return loggerMemory
}
