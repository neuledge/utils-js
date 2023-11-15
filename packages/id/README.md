# Id

Globally unique identifier based on the upcoming UUIDv7 standard (using [TypeID](https://github.com/jetpack-io/typeid)).

## Install

Install the package:

```
yarn add @neuledge/id
```

## Usage

```js
import { Id, IdType } from '@neuledge/id';

const UserId = new Id('user');
type UserId = typeof UserId.type;

// Generate a new id
const userId = UserId.generate(); // user_2x4y6z8a0b1c2d3e4f5g6h7j8k

// using the id type
const id: UserId = userId;

// Validate an id
const isValid = UserId.is(userId); // true

// Get the prefix and suffix of an id
const prefix = UserId.prefix; // user
const suffix = UserId.getSuffix(userId); // 2x4y6z8a0b1c2d3e4f5g6h7j8k

// Get the id from a suffix
const id = UserId.fromSuffix(suffix); // user_2x4y6z8a0b1c2d3e4f5g6h7j8k
```
