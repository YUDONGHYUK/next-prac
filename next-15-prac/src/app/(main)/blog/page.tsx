export default async function Blog() {
  // src/app/(main)/blog/loading.tsx 파일이 2초간 노출된 후 Blog 페이지가 보여진다.
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('2000ms delay');
    }, 2000);
  });

  return <h1>My Blog</h1>;
}
