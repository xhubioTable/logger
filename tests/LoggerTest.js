'use strict'

import { getLoggerMemory } from '../lib/index'

test('Get instance', () => {
  const logger = getLoggerMemory()
  expect(logger !== undefined).toBeTruthy()
})

test('Log error object', async done => {
  const logger = getLoggerMemory()
  // Cleanup old log entries
  logger.clear()

  await logger.error({ name: 'gumbo' })

  const errors = logger.entries.error
  delete errors[0].time

  expect(errors).toEqual([{ name: 'gumbo', level: 'error' }])
  done()
})

test('Log warning string', async done => {
  const logger = getLoggerMemory()
  // Cleanup old log entries
  logger.clear()

  await logger.warning('Hey you, whats up')

  const warn = logger.entries.warning
  delete warn[0].time

  expect(warn).toEqual([{ message: 'Hey you, whats up', level: 'warning' }])
  done()
})
