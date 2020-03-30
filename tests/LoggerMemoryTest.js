'use strict'

import { LoggerMemory } from '../lib/index'

test('Get instance', () => {
  const logger = new LoggerMemory()
  expect(logger !== undefined).toBeTruthy()
})

test('Log error object', async (done) => {
  const logger = new LoggerMemory()
  // Cleanup old log entries
  logger.clear()
  await logger.error({ name: 'gumbo' })

  const errors = logger.entries.error
  delete errors[0].time

  expect(errors).toEqual([{ name: 'gumbo', level: 'error' }])
  done()
})

test('Log warning string when level is on error', async (done) => {
  const logger = new LoggerMemory()
  // Cleanup old log entries
  logger.clear()
  await logger.warning('Hey you, whats up')
  expect(logger.entries.warning.length).toBe(0)
  done()
})

test('Log warning string when level is on warning', async (done) => {
  const logger = new LoggerMemory()
  // Cleanup old log entries
  logger.clear()
  logger.level = 'warning'

  await logger.warning('Hey you, whats up')

  const warn = logger.entries.warning
  delete warn[0].time

  expect(warn).toEqual([{ message: 'Hey you, whats up', level: 'warning' }])
  done()
})
