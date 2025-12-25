export interface Whitepaper {
  slug: string
  title: string
  subtitle: string
  date: string
  category: string
  tags: string[]
  readTime: string
  pages: number
  featured: boolean
  summary: string
  keyFindings: string[]
  tableOfContents: string[]
  abstract: string
  downloadUrl?: string
  coverImage?: string
  authors: {
    name: string
    title: string
    bio?: string
  }[]
}

export interface WhitepaperCategory {
  id: string
  name: string
  description: string
  icon: string
}
