function findFirstDuplicate(nums = []) {
  if (nums.length <= 1) return -1
  const mapObj = {}, result = []
  for (let i = 0; i < nums.length && result.length === 0; i += 1) {
    const currentNum = nums[i]
    if (mapObj[currentNum] === undefined) {
      mapObj[currentNum] = 1
    } else {
      result.push(currentNum)
    }
  }
  return result.length === 0 ? - 1 : result[0]
}

module.exports = {
  findFirstDuplicate
}
