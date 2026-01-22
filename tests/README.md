# Tests Directory

This folder contains all test files for the AtlasPro AI frontend application.

## Test Structure

```
tests/
├── setup.tsx              # Jest setup and mocks
├── README.md              # This file
├── pages/                 # Page-level tests
│   └── pages.test.tsx     # Tests for all pages
├── components/            # Component tests
│   └── components.test.tsx # Tests for key components
├── links/                 # Link validation tests
│   └── links.test.tsx     # Tests for all internal/external links
└── e2e/                   # End-to-end tests
    └── smoke.test.ts      # Smoke tests for critical paths
```

## Setup

### Install Test Dependencies

```bash
npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

### Run Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- tests/pages/pages.test.tsx

# Run in watch mode
npm test -- --watch
```

## Test Categories

### 1. Page Tests (`pages/`)
- Verify all pages render correctly
- Test page-specific functionality
- Check for proper component composition

### 2. Component Tests (`components/`)
- Test individual component rendering
- Verify component props and state
- Test user interactions (clicks, forms, etc.)

### 3. Link Tests (`links/`)
- Validate all navigation links
- Check footer links
- Verify social media links
- Test CTA button destinations

### 4. E2E Tests (`e2e/`)
- Smoke tests for critical user journeys
- Form submission tests
- Navigation flow tests

## Issues Found and Fixed

### Fixed Issues (January 2026):

1. **Missing Pages**
   - ❌ `/privacy` - FIXED ✅
   - ❌ `/terms` - FIXED ✅

2. **Broken Links**
   - ❌ Social links pointed to `#` - FIXED ✅
   - ❌ UseCases cards not clickable - FIXED ✅

3. **Component Bugs**
   - ❌ Old UseCases-old.tsx still in components - FIXED ✅

## Adding New Tests

### Page Test Example
```tsx
describe('MyNewPage', () => {
  it('should render the page title', () => {
    render(<MyNewPage />)
    expect(screen.getByRole('heading')).toHaveTextContent('Expected Title')
  })
})
```

### Component Test Example
```tsx
describe('MyComponent', () => {
  it('should handle click events', () => {
    const handleClick = jest.fn()
    render(<MyComponent onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## Coverage Goals

| Category | Target | Current |
|----------|--------|---------|
| Statements | 80% | - |
| Branches | 75% | - |
| Functions | 80% | - |
| Lines | 80% | - |

## Continuous Integration

Tests run automatically on:
- Pull request creation
- Push to main branch
- Nightly builds

## Troubleshooting

### Common Issues

1. **Jest not finding tests**
   - Check that test files match pattern: `*.test.{ts,tsx}`
   - Verify `jest.config.json` testMatch settings

2. **Module not found errors**
   - Check `@/` path alias in `moduleNameMapper`
   - Verify tsconfig paths configuration

3. **React Testing Library errors**
   - Ensure `setup.tsx` is properly configured
   - Check that all necessary mocks are in place

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Next.js](https://nextjs.org/docs/testing)
