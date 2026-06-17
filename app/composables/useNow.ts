import type { Ref } from 'vue'

export function useNow(): Ref<number> {
  const now = useState('app:now', () => Date.now())

  onMounted(() => {
    now.value = Date.now()
  })

  return now
}
