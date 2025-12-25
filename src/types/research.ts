// Research post type definitions (used for /research route)
export interface ResearchPost {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  content: string
  tags: string[]
  featured?: boolean
  readTime?: string
}

export interface ResearchPostMetadata {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  tags: string[]
  featured?: boolean
  readTime?: string
}
