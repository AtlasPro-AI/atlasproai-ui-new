// Blog post type definitions
export interface BlogPost {
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

export interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  tags: string[]
  featured?: boolean
  readTime?: string
}
