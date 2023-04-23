import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          웹 프론트엔드 개발자
          <br />
          사용자 경험이 좋은 웹앱을 만들고 있다.
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React
          <br />
          Git, Clean Code
          <br />
          VS Code, IntelliJ
        </p>
      </section>
    </>
  );
}
