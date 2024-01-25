// Default date of affirmation

function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${months[monthIndex]} ${year}`
}
const currentDate = new Date()
export const formattedDate = formatDate(currentDate)
