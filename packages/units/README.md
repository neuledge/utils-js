# Units Constants

This package provides set of constants for commonly used units such as `DAY_MS`
and `SIZE_MB`.

## Install

Install the package:

```
yarn add @neuledge/units
```

## Usage

Import the constants you need and reference them in your code:

```js
import { DAY_MS, SIZE_MB } from '@neuledge/units';

const MAX_FILE_SIZE = 10 * SIZE_MB;
const MAX_FILE_AGE = 30 * DAY_MS;
```

## Available constants

| Constant          | Value                        |
| ----------------- | ---------------------------- |
| `SECOND_MS`       | `1000`                       |
| `MINUTE_MS`       | `60e3`                       |
| `HOUR_MS`         | `3600e3`                     |
| `DAY_MS`          | `86400000`                   |
| `WEEK_MS`         | `7 * DAY_MS`                 |
| `YEAR_MS`         | `365 * DAY_MS`               |
| `SIZE_KB`         | `1024`                       |
| `SIZE_MB`         | `1024 * SIZE_KB`             |
| `SIZE_GB`         | `1024 * SIZE_MB`             |
| `SLUG_REGEXP`     | `/^[\da-z]+(?:-[\da-z]+)*$/` |
| `VAR_NAME_REGEXP` | `/^[_a-z]\w*$/i`             |

## Available helper functions

| Function         | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `roundCurrency`  | Rounds a number to 2 decimal places                   |
| `formatDigits`   | Formats a number with padding digits                  |
| `isNonNullable`  | Checks if a value is not `null` or `undefined`        |
| `elapsedTimeStr` | Returns a string representation of elapsed time       |
| `formatSlug`     | Returns a slug representation of a string             |
| `awaitTimeout`   | Returns a promise that resolves after a given timeout |
| `rejectTimeout`  | Returns a promise that rejects after a given timeout  |
