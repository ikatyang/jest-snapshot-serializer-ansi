import hasAnsi = require('has-ansi');
import stripAnsi = require('strip-ansi');

const serializer: jest.SnapshotSerializerPlugin = {
  test: value => typeof value === 'string' && hasAnsi(value),
  print: (value, serialize) => serialize(stripAnsi(value)),
};

export = serializer;
