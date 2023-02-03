import { getTime } from '../src/getTime'
import { LoggerConsole, LogLevel } from '../src/index'

const log = jest.spyOn(console, 'log').mockImplementation(() => {})
jest.mock('../src/getTime')

beforeEach(() => {
  log.mockReset()
})
;(getTime as jest.Mock).mockReturnValue('2023-01-15 12:10:30')

test('Get instance', () => {
  const logger = new LoggerConsole()
  expect(logger !== undefined).toBeTruthy()
})

test('Log error object', async () => {
  const logger = new LoggerConsole()
  await logger.error({ name: 'gumbo' })
  const message = {
    logLevel: 'error',
    name: 'gumbo'
  }
  const logLevel = 'error'
  expect(log).toHaveBeenCalledWith(
    `2023-01-15 12:10:30 ${logLevel}: ${JSON.stringify(message, null, 2)}`
  )
})

test('Log warning string when level is on error', async () => {
  const logger = new LoggerConsole()
  await logger.warning('Hey you, whats up')
  expect(log).toBeCalledTimes(0)
})

test('Log warning string when level is on warning', async () => {
  const logger = new LoggerConsole()
  // Cleanup old log entries
  logger.clear()
  logger.logLevel = LogLevel.warning

  await logger.warning('Hey you, whats up')
  const message = {
    message: 'Hey you, whats up',
    logLevel: 'warning'
  }
  const logLevel = 'warning'
  expect(log).toHaveBeenCalledWith(
    `2023-01-15 12:10:30 ${logLevel}: ${JSON.stringify(message, null, 2)}`
  )
})
