import { UserType } from '../pages/users';

type UserProps = {
  user: UserType;
};

export default function User({ user }: UserProps) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}
