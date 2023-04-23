export type BannerData = {
  message: string;
  status: 'success' | 'error';
};

type Props = {
  banner: BannerData;
};

export default function Banner({ banner: { message, status } }: Props) {
  const isSuccess = status === 'success';
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p
      className={`p-2 ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      } rounded-xl w-full text-center`}
    >{`${icon} ${message}`}</p>
  );
}
