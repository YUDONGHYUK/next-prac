import { GetStaticProps } from 'next';
import User from '../components/user';

export type UserType = {
  id: string;
  name: string;
  email: string;
};

type UserListProps = {
  users: UserType[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  users: UserType[];
}> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { users: data },
  };
};
