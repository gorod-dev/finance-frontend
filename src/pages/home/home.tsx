import { FC } from 'react';
import { useUserStore } from '@/entities/auth/model';
import { useGetUser } from '@/entities/auth/hooks/use-get-user';

const HomePage: FC = () => {
  const userId = useUserStore((state) => state.id);
  const email = useUserStore((state) => state.email);

  const { isFetching } = useGetUser();

  if (isFetching) return <div>loading...</div>;

  return (
    <div>
      {userId}
      <br />
      {email}
    </div>
  );
};

export default HomePage;
