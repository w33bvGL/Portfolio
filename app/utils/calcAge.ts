export function calcAge(birthdayString: string, now: number = Date.now()): number {
  const birthday = new Date(birthdayString)
  const today = new Date(now)

  return today.getFullYear() - birthday.getFullYear() - (
    today.getMonth() < birthday.getMonth()
    || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
      ? 1
      : 0
  )
}
