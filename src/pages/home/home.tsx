import { FC, Suspense, startTransition, useState } from 'react';
import { useUserStore } from '@/entities/auth/model';
import { useGetUser } from '@/entities/auth/hooks/use-get-user';

const HomeWidget = () => {
  const userId = useUserStore((state) => state.id);
  const email = useUserStore((state) => state.email);

  const [a, setA] = useState(1);

  useGetUser(a);

  function handleNextPageClick() {
    // If this update suspends, don't hide the already displayed content
    startTransition(() => {
      setA((currentPage) => currentPage + 1);
    });
  }

  return (
    <>
      <div>
        {userId}
        <br />
        {email}
      </div>
      <button type="button" onClick={() => handleNextPageClick()}>
        {a}
      </button>
    </>
  );
};

const HomePage: FC = () => (
  <Suspense fallback={<div style={{ color: 'red' }}>LOADING</div>}>
    <HomeWidget />
  </Suspense>
);

export default HomePage;
