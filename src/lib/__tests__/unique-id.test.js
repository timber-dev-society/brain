import uniqueId from './../unique-id'

it('should create a random string of 32 characters length', () => {
  const uid = uniqueId()

  expect(uid.length).toBe(32)
})

it('should create different random strings', () => {
  const uid1 = uniqueId()
  const uid2 = uniqueId()
  const uid3 = uniqueId()

  expect(uid1).not.toBe(uid2)
  expect(uid2).not.toBe(uid3)
  expect(uid1).not.toBe(uid3)
})

it('should change the size of the random string', () => {
  const uid = uniqueId(16)

  expect(uid.length).toBe(16)
})
