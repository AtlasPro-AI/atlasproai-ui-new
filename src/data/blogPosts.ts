import { BlogPost } from '@/types/blog'

// Blog posts data - easy to add new posts here
export const blogPosts: BlogPost[] = [
  {
    slug: 'gis-workflows-to-spatial-intelligence-os',
    title: 'From GIS Workflows to a Spatial Intelligence OS: What Changes',
    date: '2024-12-20',
    author: 'AtlasPro AI Research',
    summary: 'Traditional GIS tools treat spatial data as files to be viewed and edited. A spatial intelligence OS treats the physical world as a queryable, machine-readable layer. We explore what shifts when you move from workflow software to an operating system for spatial operations.',
    tags: ['Spatial Intelligence', 'Product'],
    featured: true,
    readTime: '6 min',
    content: `
# From GIS Workflows to a Spatial Intelligence OS: What Changes

**Note: This is a placeholder research article. Full content coming soon.**

Traditional GIS platforms are built around the metaphor of files, layers, and editing workflows. You open a shapefile, run an analysis tool, export results, and repeat. This paradigm works for periodic planning cycles but breaks down when the physical world needs to be continuously readable, queryable, and actionable by both humans and AI agents.

AtlasPro AI is designed as a spatial intelligence operating system, not a workflow tool. The distinction matters.

## What a Spatial Intelligence OS Does Differently

### 1. Live Graph, Not Static Layers
In traditional GIS, you work with snapshots—map layers frozen in time. In AtlasPro, the world is represented as a live spatial graph: nodes (parcels, poles, buildings) and edges (fiber, roads, power lines) that update in real-time.

### 2. Multimodal Fusion by Default
AtlasPro ingests all modalities—vector maps, raster imagery, LiDAR point clouds, CCTV streams, IoT telemetry—into a single queryable graph.

### 3. Engineering-Grade Outputs, Not Just Visualizations
AtlasPro generates engineering-ready deliverables: KML/KMZ for Google Earth, GeoJSON for web apps, shapefiles for AutoCAD, validated topologies for utility planning.

## Practical Implications

For a telecom planning a fiber rollout:
- **Old workflow**: Export map, run analysis in desktop GIS, manually adjust routes. Days to weeks.
- **AtlasPro**: Query the graph, get KML in seconds, push to field tablets. Hours.

The shift is about spatial operations becoming programmable, so AI agents and human operators can compose complex queries, simulations, and automations that were previously impossible.

---

*This article is part of our Research series. More detailed technical papers coming soon.*
    `
  }
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find(post => post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
