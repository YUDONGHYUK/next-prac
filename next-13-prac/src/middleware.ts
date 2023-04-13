import { NextRequest, NextResponse } from 'next/server';

// 모든 요청에 대해 함수를 실행
export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행중!');

  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉트함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

export const config = {
  matcher: ['/products/:path*'],
};
