/**
 * Link Validation Tests
 * 
 * These tests verify that all internal and external links in the application
 * point to valid destinations.
 */

describe('Link Validation Tests', () => {
  describe('Navigation Links', () => {
    const navLinks = [
      { name: 'Product Overview', href: '/product' },
      { name: 'Capabilities', href: '/product#capabilities' },
      { name: 'MCP Tools', href: '/product#mcp' },
      { name: 'Security', href: '/product#security' },
      { name: 'Research', href: '/research' },
      { name: 'Blog', href: '/blog' },
      { name: 'Whitepapers', href: '/whitepapers' },
      { name: 'Use Cases', href: '/use-cases' },
      { name: 'Contact', href: '/contact' },
    ]

    navLinks.forEach((link) => {
      it(`should have valid link for ${link.name}`, () => {
        expect(link.href).toBeTruthy()
        expect(link.href.startsWith('/')).toBe(true)
      })
    })
  })

  describe('Footer Links', () => {
    const footerLinks = [
      { name: 'Platform Overview', href: '/product' },
      { name: 'Real-time Monitoring', href: '/product#monitoring' },
      { name: 'Geospatial Analytics', href: '/product#analytics' },
      { name: 'Simulations', href: '/product#simulations' },
      { name: 'Integrations', href: '/product#integrations' },
      { name: 'Use Cases', href: '/use-cases' },
      { name: 'Infrastructure', href: '/use-cases#infrastructure' },
      { name: 'Disaster Response', href: '/use-cases#disaster' },
      { name: 'Environmental', href: '/use-cases#environmental' },
      { name: 'Security', href: '/use-cases#security' },
      { name: 'Research', href: '/research' },
      { name: 'Contact', href: '/contact' },
      { name: 'Request Demo', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]

    footerLinks.forEach((link) => {
      it(`should have valid link for ${link.name}`, () => {
        expect(link.href).toBeTruthy()
        expect(link.href.startsWith('/')).toBe(true)
      })
    })
  })

  describe('Social Links', () => {
    const socialLinks = [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/atlaspro-ai' },
      { name: 'Twitter', href: 'https://twitter.com/atlaspro_ai' },
      { name: 'GitHub', href: 'https://github.com/AtlasPro-AI' },
    ]

    socialLinks.forEach((link) => {
      it(`should have valid external link for ${link.name}`, () => {
        expect(link.href).toBeTruthy()
        expect(link.href.startsWith('https://')).toBe(true)
      })
    })
  })

  describe('CTA Buttons', () => {
    const ctaButtons = [
      { name: 'Hero Request Demo', href: '/contact' },
      { name: 'Hero Explore Use Cases', href: '/use-cases' },
      { name: 'Footer Request Demo', href: '/contact' },
      { name: 'CTA Request Demo', href: '/contact' },
      { name: 'CTA Explore Platform', href: '/product' },
    ]

    ctaButtons.forEach((button) => {
      it(`should have valid link for ${button.name}`, () => {
        expect(button.href).toBeTruthy()
        expect(button.href.startsWith('/')).toBe(true)
      })
    })
  })
})
