# jest-snapshot-serializer-ansi

[![npm](https://img.shields.io/npm/v/jest-snapshot-serializer-ansi.svg)](https://www.npmjs.com/package/jest-snapshot-serializer-ansi)
[![build](https://img.shields.io/travis/ikatyang/jest-snapshot-serializer-ansi/master.svg)](https://travis-ci.com/ikatyang/jest-snapshot-serializer-ansi/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/jest-snapshot-serializer-ansi/master.svg)](https://codecov.io/gh/ikatyang/jest-snapshot-serializer-ansi)

jest snapshot serializer for stripping [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)

[Changelog](https://github.com/ikatyang/jest-snapshot-serializer-ansi/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save-dev jest-snapshot-serializer-ansi

# using yarn
yarn add --dev jest-snapshot-serializer-ansi
```

## Usage

In config file:

```json
{
  "snapshotSerializers": ["jest-snapshot-serializer-ansi"]
}
```

or in test file:

```js
expect.addSnapshotSerializer(require('jest-snapshot-serializer-ansi'));
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
