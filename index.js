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

module.exports = {
  findFirstDuplicate
}
