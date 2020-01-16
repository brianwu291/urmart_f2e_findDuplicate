const { findFirstDuplicate } = require('./index')

it('should return minus one when the input array length is zero or one', () => {
  expect(findFirstDuplicate([])).toBe(-1)
  expect(findFirstDuplicate([1])).toBe(-1)
})

it('should return two when input array is [ 2, 1, 4, 5, 3, 2]', () => {
  expect(findFirstDuplicate([ 2, 1, 4, 5, 3, 2])).toBe(2)
})

it('should return minus one when input array is [ 2, 4, 5, 1, 3]', () => {
  expect(findFirstDuplicate([ 2, 4, 5, 1, 3])).toBe(-1)
})

it('should return minus one when input array is [ 2, 1, 3, 5, 3, 2] ', () => {
  expect(findFirstDuplicate([ 2, 1, 3, 5, 3, 2] )).toBe(3)
})