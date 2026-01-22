#!/bin/bash

# Page Health Check Script
# Verifies all pages in the AtlasPro AI frontend are accessible

echo "🔍 AtlasPro AI - Page Health Check"
echo "=================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Base URL (default to localhost:3000)
BASE_URL="${1:-http://localhost:3000}"

# Array of pages to check
pages=(
  "/"
  "/product"
  "/use-cases"
  "/about"
  "/contact"
  "/blog"
  "/research"
  "/whitepapers"
  "/privacy"
  "/terms"
)

# Track results
passed=0
failed=0

echo "Checking pages at: $BASE_URL"
echo ""

for page in "${pages[@]}"; do
  url="${BASE_URL}${page}"
  
  # Use curl to check the page (timeout after 5 seconds)
  status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" 2>/dev/null)
  
  if [ "$status" = "200" ]; then
    echo -e "${GREEN}✓${NC} $page (HTTP $status)"
    ((passed++))
  else
    echo -e "${RED}✗${NC} $page (HTTP $status)"
    ((failed++))
  fi
done

echo ""
echo "=================================="
echo "Results: $passed passed, $failed failed"
echo ""

if [ $failed -eq 0 ]; then
  echo -e "${GREEN}All pages are healthy! ✓${NC}"
  exit 0
else
  echo -e "${RED}Some pages failed. Please check the errors above.${NC}"
  exit 1
fi
