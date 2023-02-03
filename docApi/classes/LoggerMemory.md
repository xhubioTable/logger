[@xhubiotable/logger](../README.md) / [Exports](../modules.md) / LoggerMemory

# Class: LoggerMemory

This logger stores all the Logs in Memory.
This logger is mainly for unit tests

## Implements

- [`LoggerInterface`](../interfaces/LoggerInterface.md)

## Table of contents

### Constructors

- [constructor](LoggerMemory.md#constructor)

### Properties

- [hasError](LoggerMemory.md#haserror)
- [logLevel](LoggerMemory.md#loglevel)
- [messagesDebug](LoggerMemory.md#messagesdebug)
- [messagesError](LoggerMemory.md#messageserror)
- [messagesFatal](LoggerMemory.md#messagesfatal)
- [messagesInfo](LoggerMemory.md#messagesinfo)
- [messagesWarning](LoggerMemory.md#messageswarning)
- [writeConsole](LoggerMemory.md#writeconsole)

### Methods

- [clear](LoggerMemory.md#clear)
- [debug](LoggerMemory.md#debug)
- [error](LoggerMemory.md#error)
- [fatal](LoggerMemory.md#fatal)
- [info](LoggerMemory.md#info)
- [warning](LoggerMemory.md#warning)
- [writeLog](LoggerMemory.md#writelog)

## Constructors

### constructor

• **new LoggerMemory**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `LoggerMemoryOptions` |

#### Defined in

[LoggerMemory.ts:33](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L33)

## Properties

### hasError

• **hasError**: `boolean` = `false`

If a log with error or above was created, this flag is set to true

#### Implementation of

[LoggerInterface](../interfaces/LoggerInterface.md).[hasError](../interfaces/LoggerInterface.md#haserror)

#### Defined in

[LoggerMemory.ts:25](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L25)

___

### logLevel

• **logLevel**: [`LogLevel`](../enums/LogLevel.md) = `LogLevel.error`

The current log level of the logger

#### Implementation of

[LoggerInterface](../interfaces/LoggerInterface.md).[logLevel](../interfaces/LoggerInterface.md#loglevel)

#### Defined in

[LoggerMemory.ts:19](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L19)

___

### messagesDebug

• **messagesDebug**: `any`[] = `[]`

#### Defined in

[LoggerMemory.ts:27](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L27)

___

### messagesError

• **messagesError**: `any`[] = `[]`

#### Defined in

[LoggerMemory.ts:30](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L30)

___

### messagesFatal

• **messagesFatal**: `any`[] = `[]`

#### Defined in

[LoggerMemory.ts:31](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L31)

___

### messagesInfo

• **messagesInfo**: `any`[] = `[]`

#### Defined in

[LoggerMemory.ts:28](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L28)

___

### messagesWarning

• **messagesWarning**: `any`[] = `[]`

#### Defined in

[LoggerMemory.ts:29](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L29)

___

### writeConsole

• **writeConsole**: `boolean` = `false`

If set to a true value, each log stored is also printed to console

#### Defined in

[LoggerMemory.ts:22](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L22)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[LoggerMemory.ts:43](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L43)

___

### debug

▸ **debug**(`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

#### Returns

`Promise`<`void`\>

#### Implementation of

LoggerInterface.debug

#### Defined in

[LoggerMemory.ts:52](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L52)

___

### error

▸ **error**(`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

#### Returns

`Promise`<`void`\>

#### Implementation of

LoggerInterface.error

#### Defined in

[LoggerMemory.ts:70](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L70)

___

### fatal

▸ **fatal**(`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

#### Returns

`Promise`<`void`\>

#### Implementation of

LoggerInterface.fatal

#### Defined in

[LoggerMemory.ts:77](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L77)

___

### info

▸ **info**(`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

#### Returns

`Promise`<`void`\>

#### Implementation of

LoggerInterface.info

#### Defined in

[LoggerMemory.ts:58](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L58)

___

### warning

▸ **warning**(`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

#### Returns

`Promise`<`void`\>

#### Implementation of

LoggerInterface.warning

#### Defined in

[LoggerMemory.ts:64](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L64)

___

### writeLog

▸ `Protected` **writeLog**(`store`, `entry`, `logLevel`): `void`

Writes the log, or do what ever. At this point in time
the logs with the wrong level arte already filtered

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `store` | `any`[] | an Array to store the log |
| `entry` | `any` | The data to be logged |
| `logLevel` | [`LogLevel`](../enums/LogLevel.md) | - |

#### Returns

`void`

#### Defined in

[LoggerMemory.ts:90](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerMemory.ts#L90)
