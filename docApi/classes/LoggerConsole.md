[@xhubiotable/logger](../README.md) / [Exports](../modules.md) / LoggerConsole

# Class: LoggerConsole

This logger stores all the Logs in Memory.
This logger is mainly for unit tests

## Implements

- [`LoggerInterface`](../interfaces/LoggerInterface.md)

## Table of contents

### Constructors

- [constructor](LoggerConsole.md#constructor)

### Properties

- [hasError](LoggerConsole.md#haserror)
- [logLevel](LoggerConsole.md#loglevel)

### Methods

- [clear](LoggerConsole.md#clear)
- [debug](LoggerConsole.md#debug)
- [error](LoggerConsole.md#error)
- [fatal](LoggerConsole.md#fatal)
- [info](LoggerConsole.md#info)
- [warning](LoggerConsole.md#warning)
- [writeLog](LoggerConsole.md#writelog)

## Constructors

### constructor

• **new LoggerConsole**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `LoggerConsoleOptions` |

#### Defined in

[LoggerConsole.ts:21](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L21)

## Properties

### hasError

• **hasError**: `boolean` = `false`

If a log with error or above was created, this flag is set to true

#### Implementation of

[LoggerInterface](../interfaces/LoggerInterface.md).[hasError](../interfaces/LoggerInterface.md#haserror)

#### Defined in

[LoggerConsole.ts:19](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L19)

___

### logLevel

• **logLevel**: [`LogLevel`](../enums/LogLevel.md) = `LogLevel.error`

The current log level of the logger

#### Implementation of

[LoggerInterface](../interfaces/LoggerInterface.md).[logLevel](../interfaces/LoggerInterface.md#loglevel)

#### Defined in

[LoggerConsole.ts:16](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L16)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[LoggerConsole.ts:28](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L28)

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

[LoggerConsole.ts:32](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L32)

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

[LoggerConsole.ts:50](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L50)

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

[LoggerConsole.ts:57](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L57)

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

[LoggerConsole.ts:38](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L38)

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

[LoggerConsole.ts:44](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L44)

___

### writeLog

▸ `Protected` **writeLog**(`entry`, `logLevel`): `void`

Writes the log, or do what ever. At this point in time
the logs with the wrong level arte already filtered

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entry` | `any` | The data to be logged |
| `logLevel` | [`LogLevel`](../enums/LogLevel.md) | - |

#### Returns

`void`

#### Defined in

[LoggerConsole.ts:70](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerConsole.ts#L70)
