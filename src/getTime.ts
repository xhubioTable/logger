/**
 * Returns the current time in the format used by this logger
 */
export function getTime(): string {
  function fill(val: number): string {
    if (val < 10) {
      return `0${val}`
    }
    return `${val}`
  }
  const date = new Date(Date.now())
  const dateStr = `${date.getFullYear()}-${fill(date.getMonth() + 1)}-${fill(
    date.getDate()
  )}`
  const timeStr = `${fill(date.getHours())}:${fill(date.getMinutes())}:${fill(
    date.getSeconds()
  )}`
  return `${dateStr} ${timeStr}`
}
