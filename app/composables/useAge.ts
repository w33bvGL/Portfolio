import type { ComputedRef } from 'vue'

export function useAge(): ComputedRef<number> {
  const { global } = useAppConfig()
  const now = useNow()

  return computed(() => calcAge(global.birthday, now.value))
}
