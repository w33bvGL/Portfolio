export interface Experience {
  id: number
  company: string
  title: string
  period: string
  description: string
}

export interface ExperienceData {
  period: string
  description: string
}

export interface ExperienceRaw {
  id: number
  company: string
  title: string
  data: Record<string, ExperienceData>
}
