import validateStore from '../validateStore'

describe('Validating a store', () => {
  it('should throw an error', () => {
    const validate = store => validateStore(store)

    expect(validate).toThrow()
  })

  it('should return true', () => {
    expect(validateStore({})).toBe(true)
  })
})
