import { Chalk } from 'chalk'
import { expect, test } from 'vitest'
import * as serializer from '../src/index.js'

const chalk = new Chalk({ level: 1 }) // force color in CI

expect.addSnapshotSerializer(serializer)

test('ansi', () => {
  const text = 'text'
  const ansi = chalk.blue(text)
  expect(ansi).not.toEqual(text)
  expect(ansi).toMatchInlineSnapshot(`"text"`)
  expect(text).toMatchInlineSnapshot(`"text"`)
})
