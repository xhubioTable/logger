[@xhubiotable/logger](../README.md) / [Exports](../modules.md) / LoggerInterface

# Interface: LoggerInterface

Defines the Logger

## Implemented by

- [`LoggerConsole`](../classes/LoggerConsole.md)
- [`LoggerMemory`](../classes/LoggerMemory.md)

## Table of contents

### Properties

- [debug](LoggerInterface.md#debug)
- [error](LoggerInterface.md#error)
- [fatal](LoggerInterface.md#fatal)
- [hasError](LoggerInterface.md#haserror)
- [info](LoggerInterface.md#info)
- [logLevel](LoggerInterface.md#loglevel)
- [warning](LoggerInterface.md#warning)

## Properties

### debug

• **debug**: (`message`: `any`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

##### Returns

`Promise`<`void`\>

#### Defined in

[LoggerInterface.ts:17](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L17)

___

### error

• **error**: (`message`: `any`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

##### Returns

`Promise`<`void`\>

#### Defined in

[LoggerInterface.ts:35](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L35)

___

### fatal

• **fatal**: (`message`: `any`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

##### Returns

`Promise`<`void`\>

#### Defined in

[LoggerInterface.ts:41](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L41)

___

### hasError

• **hasError**: `boolean`

If a log with error or above was created, this flag is set to true

#### Defined in

[LoggerInterface.ts:11](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L11)

___

### info

• **info**: (`message`: `any`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

##### Returns

`Promise`<`void`\>

#### Defined in

[LoggerInterface.ts:23](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L23)

___

### logLevel

• **logLevel**: [`LogLevel`](../enums/LogLevel.md)

The current log level

#### Defined in

[LoggerInterface.ts:8](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L8)

___

### warning

• **warning**: (`message`: `any`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

Logs a message or on object with the loglevel debug

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | A string or an json object to be logged |

##### Returns

`Promise`<`void`\>

#### Defined in

[LoggerInterface.ts:29](https://github.com/xhubioTable/logger/blob/775ef83/src/LoggerInterface.ts#L29)
