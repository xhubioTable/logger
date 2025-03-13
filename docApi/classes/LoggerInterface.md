[**@tlink/logger**](../README.md)

***

[@tlink/logger](../globals.md) / LoggerInterface

# Class: LoggerInterface

Defined in: LoggerInterface.ts:29

Defines the interface of a logger used by all the modules.

## Extended by

- [`LoggerMemory`](LoggerMemory.md)

## Constructors

### new LoggerInterface()

> **new LoggerInterface**(): [`LoggerInterface`](LoggerInterface.md)

#### Returns

[`LoggerInterface`](LoggerInterface.md)

## Properties

### \_level

> **\_level**: `number` = `DEFAULT_LEVEL`

Defined in: LoggerInterface.ts:31

The log level number

## Accessors

### level

#### Get Signature

> **get** **level**(): `string`

Defined in: LoggerInterface.ts:54

Returns the current log level

##### Returns

`string`

level - The logLevel as string

#### Set Signature

> **set** **level**(`level`): `void`

Defined in: LoggerInterface.ts:37

sets a new log level

##### Parameters

###### level

The logLevel as number or String value

`string` | `number`

##### Returns

`void`

## Methods

### debug()

> **debug**(`message`): `void`

Defined in: LoggerInterface.ts:139

Logs the given message with the level 'debug'

#### Parameters

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The message or data to log

#### Returns

`void`

A promise when the log is written

***

### error()

> **error**(`message`): `void`

Defined in: LoggerInterface.ts:169

Logs the given message with the level 'error'

#### Parameters

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The message or data to log

#### Returns

`void`

A promise when the log is written

***

### fatal()

> **fatal**(`message`): `void`

Defined in: LoggerInterface.ts:179

Logs the given message with the level 'fatal'

#### Parameters

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The message or data to log

#### Returns

`void`

A promise when the log is written

***

### getLevelName()

> `protected` **getLevelName**(`level`): `string`

Defined in: LoggerInterface.ts:75

Returns the logLevel as a string

#### Parameters

##### level

`number`

The loglevel as a number

#### Returns

`string`

The loglevel as a string

***

### getLevelNumber()

> `protected` **getLevelNumber**(`level`): `number`

Defined in: LoggerInterface.ts:63

returns the logLevel as a number

#### Parameters

##### level

`string`

The loglevel as a string

#### Returns

`number`

The loglevel as a number

***

### getLogEntry()

> `protected` **getLogEntry**(`level`, `message`): [`LogEntry`](../type-aliases/LogEntry.md)

Defined in: LoggerInterface.ts:101

Thios function converts a log message into a log entry

#### Parameters

##### level

`string`

The log level of the current entry

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The data to log

#### Returns

[`LogEntry`](../type-aliases/LogEntry.md)

The log entry

***

### getTime()

> `protected` **getTime**(): `string`

Defined in: LoggerInterface.ts:187

Returns a time string for the log entry

#### Returns

`string`

The current time in the format used by this logger

***

### info()

> **info**(`message`): `void`

Defined in: LoggerInterface.ts:149

Logs the given message with the level 'info'

#### Parameters

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The message or data to log

#### Returns

`void`

A promise when the log is written

***

### log()

> `protected` **log**(`level`, `message`): `void`

Defined in: LoggerInterface.ts:88

Do the logging

#### Parameters

##### level

`string`

The log level of the current entry

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The data to log

#### Returns

`void`

***

### warning()

> **warning**(`message`): `void`

Defined in: LoggerInterface.ts:159

Logs the given message with the level 'warning'

#### Parameters

##### message

[`LogMessageType`](../type-aliases/LogMessageType.md)

The message or data to log

#### Returns

`void`

A promise when the log is written

***

### writeLog()

> `protected` **writeLog**(`level`, `entry`): `void`

Defined in: LoggerInterface.ts:126

Writes the log, or do what ever. At this point in time
the logs with the wrong level arte already filtered

#### Parameters

##### level

`string`

The log level of the current entry

##### entry

[`LogEntry`](../type-aliases/LogEntry.md)

The log entry

#### Returns

`void`
