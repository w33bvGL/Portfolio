import type { H3Event } from 'h3'

export const getLocalizedData = <T extends Record<string, any>>(event: H3Event, data: T) => {
  const query = getQuery(event)
  const lang = (query.lang as string) || 'en'
  return data[lang as keyof T] || data.en
}
