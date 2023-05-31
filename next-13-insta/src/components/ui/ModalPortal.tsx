import reactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // SeverSide Rendering 시에는 처리 X
  // 즉, 브라우저 환경(window)일 때만 처리해 줄 것이기 때문에
  // 브라우저 환경이 아니면(typeof window === 'undefined') null 반환
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, node);
}
