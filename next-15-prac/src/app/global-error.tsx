'use client';

// Root Layout 또는 Root Template에서 발생하는 에러를 다루기 위해서는 app 폴더의 Root에  global-error.tsx 파일을 생성한다.
// global-error.tsx 컴포넌트에는 <html>, <body> 태그를 꼭 정의해줘야 한다.
// Globla ErrorBoundary는 production 모드에서만 동작한다.
export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
