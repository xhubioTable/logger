import { LogLevel, LoggerMemory } from '../src/index'

test('Get instance', () => {
  const logger = new LoggerMemory()
  expect(logger !== undefined).toBeTruthy()
})

test('Log error object', async () => {
  const logger = new LoggerMemory()
  await logger.error({ name: 'gumbo' })

  const errors = logger.messagesError
  delete errors[0].time

  expect(errors).toEqual([{ name: 'gumbo', logLevel: 'error' }])
})

test('Log warning string when level is on error', async () => {
  const logger = new LoggerMemory()
  await logger.warning('Hey you, whats up')
  expect(logger.messagesWarning.length).toBe(0)
})

test('Log warning string when level is on warning', async () => {
  const logger = new LoggerMemory()
  // Cleanup old log entries
  logger.clear()
  logger.logLevel = LogLevel.warning

  await logger.warning('Hey you, whats up')

  const warn = logger.messagesWarning
  delete warn[0].time

  expect(warn).toEqual([{ message: 'Hey you, whats up', logLevel: 'warning' }])
})
