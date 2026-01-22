/**
 * Smoke Tests - E2E Critical Path Tests
 * 
 * These tests verify the most critical user journeys work correctly.
 * Can be run with Playwright or similar E2E testing framework.
 */

export const smokeTests = {
  homepage: {
    url: '/',
    tests: [
      { name: 'Hero loads', selector: 'h1' },
      { name: 'Request Demo button exists', selector: 'a[href="/contact"]' },
      { name: 'Navigation visible', selector: 'nav' },
      { name: 'Footer visible', selector: 'footer' },
    ],
  },
  
  product: {
    url: '/product',
    tests: [
      { name: 'Product page loads', selector: 'h1' },
      { name: 'Platform features visible', selector: '.glass' },
    ],
  },
  
  useCases: {
    url: '/use-cases',
    tests: [
      { name: 'Use cases page loads', selector: 'h1' },
      { name: 'Use case cards visible', selector: '.glass' },
    ],
  },
  
  contact: {
    url: '/contact',
    tests: [
      { name: 'Contact page loads', selector: 'h1' },
      { name: 'Form visible', selector: 'form' },
      { name: 'Submit button exists', selector: 'button[type="submit"]' },
    ],
  },
  
  blog: {
    url: '/blog',
    tests: [
      { name: 'Blog page loads', selector: 'h1' },
      { name: 'Blog posts visible', selector: 'article, .glass' },
    ],
  },
  
  research: {
    url: '/research',
    tests: [
      { name: 'Research page loads', selector: 'h1' },
    ],
  },
  
  whitepapers: {
    url: '/whitepapers',
    tests: [
      { name: 'Whitepapers page loads', selector: 'h1' },
    ],
  },
  
  privacy: {
    url: '/privacy',
    tests: [
      { name: 'Privacy page loads', selector: 'h1' },
      { name: 'Privacy content visible', selector: '.glass' },
    ],
  },
  
  terms: {
    url: '/terms',
    tests: [
      { name: 'Terms page loads', selector: 'h1' },
      { name: 'Terms content visible', selector: '.glass' },
    ],
  },
}

/**
 * Manual Testing Checklist
 * 
 * Run through this checklist to manually verify all features work.
 */
export const manualTestChecklist = [
  // Navigation
  '[ ] Logo click navigates to home',
  '[ ] Product dropdown opens on hover/click',
  '[ ] Resources dropdown opens on hover/click',
  '[ ] Use Cases link works',
  '[ ] Request Demo button navigates to /contact',
  '[ ] Mobile menu opens and closes',
  '[ ] Mobile menu links work',
  '[ ] Dropdown closes when clicking outside',
  
  // Home Page
  '[ ] Hero section renders with animation',
  '[ ] Request Demo CTA works',
  '[ ] Explore Use Cases CTA works',
  '[ ] All sections load on scroll',
  '[ ] UseCases cards are clickable',
  '[ ] Footer links work',
  '[ ] Social links open in new tab',
  
  // Contact Page
  '[ ] Form fields accept input',
  '[ ] Form validates required fields',
  '[ ] Form submit shows confirmation',
  
  // Product Page
  '[ ] Interactive map loads',
  '[ ] Product cards display correctly',
  
  // Blog/Research/Whitepapers
  '[ ] Blog posts display',
  '[ ] Blog categories filter works',
  '[ ] Search functionality works',
  '[ ] Individual post pages load',
  '[ ] Whitepaper download modal opens',
  
  // Legal Pages
  '[ ] Privacy Policy page loads',
  '[ ] Terms of Service page loads',
  
  // General
  '[ ] Page transitions are smooth',
  '[ ] No console errors',
  '[ ] All images load',
  '[ ] Mobile responsive works',
]

// Export for use in test runners
export default { smokeTests, manualTestChecklist }
