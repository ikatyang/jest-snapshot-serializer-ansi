import chalk from 'chalk';
import serializer = require('../src');

expect.addSnapshotSerializer(serializer);

test('ansi', () => {
  const text = 'text';
  const ansi = chalk.blue(text);
  expect(ansi).not.toEqual(text);
  expect(ansi).toMatchInlineSnapshot(`"text"`);
  expect(text).toMatchInlineSnapshot(`"text"`);
});
