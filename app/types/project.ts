export type Project = {
  name: string
  image: string
  description: string
  isAdult?: boolean
  url?: string
  tags?: string[]
}

export type TranslatedProjects = Translated<Project>
