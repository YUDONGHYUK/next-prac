/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
        // Search Engine에 308 status code를 보내 페이지가 영원히 이동했음을 알려준다.
        // 영원히 변경되었기 Search Engine은 destination을 캐시할 수 있게된다.
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // 폴더 경로를 살펴보면 /about/me/doyu 페이지로 이동해야 "I am Doyu 😀" 페이지가 나온다.
        // 하지만 rewrites를 사용하게 되면 /doyu로 이동해도 /about/me/doyu와 동일한 페이지를 볼 수 있게된다.
        // 물론 원래의 /about/me/doyu로 이동해도 페이지는 나타난다.
        source: '/doyu',
        destination: '/about/me/doyu',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
