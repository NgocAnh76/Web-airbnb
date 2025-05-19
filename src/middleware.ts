import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const userInfo = request.cookies.get('userInfo')?.value;
  let userRole = null;

  if (userInfo) {
    try {
      const parsedUserInfo = JSON.parse(userInfo);
      userRole = parsedUserInfo.role_id;
    } catch (error) {
      console.error('Error parsing user info:', error);
    }
  }

  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // If no token or not admin role, redirect to home with error message
    if (!token || userRole !== 1) {
      const url = new URL('/', request.url);
      url.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: '/admin/:path*',
};
