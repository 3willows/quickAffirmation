export function getOrdinal(n) {
  let suffix = ["th", "st", "nd", "rd"]
  let v = n % 100
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
}
export const convertToChinese = (number) => {
  const chineseNumbers = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ]
  const chineseUnits = ["", "十", "百", "千", "万"]

  const numStr = number.toString()
  let chineseResult = ""

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i])
    const unit = chineseUnits[numStr.length - i - 1]

    if (digit !== 0) {
      chineseResult += chineseNumbers[digit] + unit
    } else if (i === numStr.length - 1 || numStr[i + 1] !== "0") {
      chineseResult += chineseNumbers[digit]
    }
    return `${chineseResult}`
  }
}
