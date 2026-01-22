# Scripts Directory

This folder contains utility scripts for the AtlasPro AI frontend.

## Available Scripts

### health-check.sh

Verifies all pages in the application are accessible and returning HTTP 200.

**Usage:**
```bash
# Make executable (first time only)
chmod +x scripts/health-check.sh

# Run against local dev server
./scripts/health-check.sh

# Run against custom URL
./scripts/health-check.sh https://staging.atlaspro.ai
```

**Output:**
```
🔍 AtlasPro AI - Page Health Check
==================================

Checking pages at: http://localhost:3000

✓ / (HTTP 200)
✓ /product (HTTP 200)
✓ /use-cases (HTTP 200)
...

Results: 10 passed, 0 failed

All pages are healthy! ✓
```

## Adding New Scripts

Place new scripts in this directory and document them in this README.

### Script Guidelines

1. Add shebang at the top: `#!/bin/bash`
2. Include helpful comments
3. Make scripts executable: `chmod +x script.sh`
4. Document usage in this README
