import { Foo } from '@/entity/foo'

describe('Foo', () => {
  it('should call Foo', () => {
    const foo = new Foo('anything')

    expect(foo.bar).toBe('anything')
  })
})
