[**@tlink/logger**](../README.md)

***

[@tlink/logger](../globals.md) / LoggerMemory

# Class: LoggerMemory

Defined in: LoggerMemory.ts:14

Implements a default logger. It will store all the logEntries in Memory.
if 'writeConsole' is set  to true, it will also output the logs to the console.
This logger is mainly used for debugging and development.

## Extends

- [`LoggerInterface`](LoggerInterface.md)

## Constructors

### new LoggerMemory()

> **new LoggerMemory**(`opts`?): [`LoggerMemory`](LoggerMemory.md)

Defined in: LoggerMemory.ts:26

#### Parameters

##### opts?

[`LoggerMemoryOptions`](../interfaces/LoggerMemoryOptions.md)

#### Returns

[`LoggerMemory`](LoggerMemory.md)

#### Overrides

[`LoggerInterface`](LoggerInterface.md).[`constructor`](LoggerInterface.md#constructors)

## Properties

### \_level

> **\_level**: `number` = `DEFAULT_LEVEL`

Defined in: LoggerInterface.ts:31

The log level number

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`_level`](LoggerInterface.md#_level)

***

### entries

> **entries**: `Record`\<`string`, [`LogEntry`](../type-aliases/LogEntry.md)[]\>

Defined in: LoggerMemory.ts:18

***

### writeConsole

> **writeConsole**: `boolean` = `false`

Defined in: LoggerMemory.ts:16

Defines if the memory logger should also write the output to the console

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`level`](LoggerInterface.md#level)

## Methods

### clear()

> **clear**(): `void`

Defined in: LoggerMemory.ts:40

Clears all the existing log entries

#### Returns

`void`

***

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`debug`](LoggerInterface.md#debug)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`error`](LoggerInterface.md#error)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`fatal`](LoggerInterface.md#fatal)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`getLevelName`](LoggerInterface.md#getlevelname)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`getLevelNumber`](LoggerInterface.md#getlevelnumber)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`getLogEntry`](LoggerInterface.md#getlogentry)

***

### getTime()

> `protected` **getTime**(): `string`

Defined in: LoggerInterface.ts:187

Returns a time string for the log entry

#### Returns

`string`

The current time in the format used by this logger

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`getTime`](LoggerInterface.md#gettime)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`info`](LoggerInterface.md#info)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`log`](LoggerInterface.md#log)

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

#### Inherited from

[`LoggerInterface`](LoggerInterface.md).[`warning`](LoggerInterface.md#warning)

***

### writeLog()

> `protected` **writeLog**(`level`, `entry`): `void`

Defined in: LoggerMemory.ts:56

Stores the log in the interal storage and maybe write its to the console

#### Parameters

##### level

`string`

The log level of the current entry

##### entry

[`LogEntry`](../type-aliases/LogEntry.md)

The log entry

#### Returns

`void`

#### Overrides

[`LoggerInterface`](LoggerInterface.md).[`writeLog`](LoggerInterface.md#writelog)
