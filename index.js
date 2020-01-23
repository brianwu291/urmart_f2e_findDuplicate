function findFirstDuplicate(nums = []) {
  if (nums.length <= 1) return -1
  const mapObj = {}
  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i]
    if (mapObj[currentNum] === undefined) {
      mapObj[currentNum] = 1
    } else {
      return currentNum
    }
  }
  return -1
}
function arrayNesting(nums) {
  function getSetLengthOfIndex(index = 0) {
    const mapObj = {}
    let result = 0, lastVal = 0, currentVal = 0, isRepeated = false
    while (!isRepeated) {
      if (result === 0) {
        result += 1
        mapObj[nums[index]] = 1
        lastVal = nums[index]
      }
      currentVal = nums[lastVal]
      if (mapObj[currentVal] === undefined && currentVal !== undefined) {
        result += 1
        mapObj[currentVal] = 1
        nums[lastVal] = 'visited'
        lastVal = currentVal
      } else {
        isRepeated = true
      }
    }
    return result
  }
  if (nums.length <= 1) return nums.length
  return nums.reduce((pre, num, index) => {
    if (num === 'visited') return pre
    const temp = getSetLengthOfIndex(index)
    return Math.max(temp, pre)
  }, 0)
}

module.exports = {
  findFirstDuplicate,
  arrayNesting,
}
