import hasAnsi from 'has-ansi'
import stripAnsi from 'strip-ansi'

export function test(value: any): boolean {
  return typeof value === 'string' && hasAnsi(value)
}

export function print(value: unknown, serialize: (value: unknown) => string) {
  return serialize(stripAnsi(value as string))
}
