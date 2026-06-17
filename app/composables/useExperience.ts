import type { ComputedRef } from 'vue'

interface UseExperienceReturn {
  experience: ComputedRef<{ years: number, months: number }>
  experienceString: ComputedRef<string>
}

export function useExperienceString(): UseExperienceReturn {
  const { global } = useAppConfig()
  const { t, tm } = useI18n()
  const now = useNow()

  const experience = computed(() => getExperience(global.experienceStartDate, now.value))

  const experienceString = computed(() => {
    const { years: y, months: m } = experience.value

    const yearsWords = tm('index.experience.years') as [string, string, string]
    const monthsWords = tm('index.experience.months') as [string, string, string]

    const parts: string[] = []
    if (y > 0) parts.push(`${y} ${declOfNum(y, yearsWords)}`)
    if (m > 0) parts.push(`${m} ${declOfNum(m, monthsWords)}`)

    return parts.length ? parts.join(' ') : t('index.experience.lessThanMonth')
  })

  return { experience, experienceString }
}
