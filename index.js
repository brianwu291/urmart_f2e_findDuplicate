function findDuplicate(nums = []) {
  if (nums.length <= 1) return -1
  const mapObj = {}, result = [], j = 0
  for (let i = 0; i < nums.length && result.length === 0; i += 1) {
    console.log(j)
    const num = nums[i]
    if (mapObj[num] === undefined) {
      mapObj[num] = 1
    } else {
      result.push(num)
    }
  }
  if (result.length === 0) return -1
  return result.length === 1 ? result[0] : result[1]
}
