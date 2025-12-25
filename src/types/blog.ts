// Blog post type definitions (used for /blog route)
export interface BlogPost {
  slug: string
  title: string
  date: string
  author: {
    name: string
    title: string
    avatar?: string
  }
  category: string
  tags: string[]
  readTime: string
  featured: boolean
  excerpt: string
  content: string
  coverImage?: string
  relatedPosts?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  icon: string
}
