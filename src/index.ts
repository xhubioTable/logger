import { LoggerConsole } from './LoggerConsole'
import { LoggerMemory } from './LoggerMemory'

export type { LoggerInterface } from './LoggerInterface'
export { LogLevel } from './constants'
export { LoggerConsole, LoggerMemory }

let loggerMemory: LoggerMemory
export function getLoggerMemory(): LoggerMemory {
  if (loggerMemory === undefined) {
    loggerMemory = new LoggerMemory()
  }
  return loggerMemory
}

let loggerConsole: LoggerConsole
export function getLoggerConsole(): LoggerConsole {
  if (loggerConsole === undefined) {
    loggerConsole = new LoggerConsole()
  }
  return loggerConsole
}
