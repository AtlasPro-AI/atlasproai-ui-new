import { BlogPost, BlogCategory } from '@/types/blog'

export const blogCategories: BlogCategory[] = [
  {
    id: 'product',
    name: 'Product Updates',
    description: 'New features, releases, and platform improvements',
    icon: 'rocket'
  },
  {
    id: 'case-study',
    name: 'Case Studies',
    description: 'Real-world success stories and customer wins',
    icon: 'star'
  },
  {
    id: 'industry',
    name: 'Industry Insights',
    description: 'Trends, analysis, and market perspectives',
    icon: 'trending'
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Engineering deep-dives and tutorials',
    icon: 'code'
  },
  {
    id: 'company',
    name: 'Company News',
    description: 'Team updates, partnerships, and announcements',
    icon: 'users'
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'atlaspro-series-b-funding',
    title: 'AtlasPro AI Raises $45M Series B to Scale Spatial Intelligence Platform',
    date: '2024-12-10',
    author: {
      name: 'Rebecca Thompson',
      title: 'CEO & Co-Founder'
    },
    category: 'company',
    tags: ['Funding', 'Growth', 'Announcement'],
    readTime: '4 min',
    featured: true,
    excerpt: 'We are thrilled to announce our $45M Series B funding round led by Sequoia Capital, with participation from Andreessen Horowitz and existing investors. This brings our total funding to $70M and validates our vision of making the physical world machine-readable.',
    content: `This is a mock blog post. Full content coming soon.`
  },
  {
    slug: 'mcp-integration-announcement',
    title: 'AtlasPro AI Launches Model Context Protocol Integration',
    date: '2024-11-22',
    author: {
      name: 'James Park',
      title: 'Head of Developer Relations'
    },
    category: 'product',
    tags: ['MCP', 'AI Agents', 'Product Launch'],
    readTime: '6 min',
    featured: true,
    excerpt: 'Today we are announcing MCP integration, enabling Claude, ChatGPT, and custom AI agents to perform spatial queries using natural language.',
    content: `This is a mock blog post. Full content coming soon.`
  },
  {
    slug: 'regional-isp-case-study',
    title: 'How Cascade Networks Deployed 10,000 Homes in 6 Months',
    date: '2024-11-10',
    author: {
      name: 'Sarah Miller',
      title: 'Customer Success Lead'
    },
    category: 'case-study',
    tags: ['Telecom', 'Fiber', 'ROI'],
    readTime: '8 min',
    featured: true,
    excerpt: 'Cascade Networks used AtlasPro AI to accelerate their BEAD-funded fiber deployment by 3x while reducing planning costs by 65%.',
    content: `This is a mock blog post. Full content coming soon.`
  }
]

// Helper functions
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getAllBlogTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}

export function getRelatedBlogPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit)
}
