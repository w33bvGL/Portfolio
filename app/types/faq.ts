
export interface FaqItem {
  q: string
  a: string
}

export type TranslatedFaq = Translated<FaqItem[]>
