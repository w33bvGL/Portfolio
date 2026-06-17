/**
 * Pure duration calculation between a start date and a reference instant.
 *
 * `now` is injected (rather than read from `Date.now()` internally) so the
 * caller controls the reference point — this keeps the function deterministic
 * and lets SSR/hydration share the exact same instant. See `useNow()`.
 */
export function getExperience(
  startDate: string,
  now: number = Date.now()
): { years: number, months: number } {
  const start = new Date(startDate)
  const ref = new Date(now)

  let years = ref.getFullYear() - start.getFullYear()
  let months = ref.getMonth() - start.getMonth()

  if (ref.getDate() < start.getDate()) {
    months--
  }

  if (months < 0) {
    years--
    months += 12
  }

  return { years, months }
}
