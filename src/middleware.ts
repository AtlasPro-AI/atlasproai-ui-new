import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect /about to /research
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/research', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/about'],
}
