import { User } from '@/model/user';
import Avatar from './Avatar';

type Props = {
  user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-4">
        About ﹒ Help ﹒ Press ﹒ API ﹒ Privacy ﹒ Terms ﹒ Loaction ﹒
        Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright INSTA from Doyu
      </p>
    </>
  );
}
