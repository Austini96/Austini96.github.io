import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For direct access to root path, serve the index.html
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/index.html", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
