import { FC } from 'react';
import { Page } from '@/shared/ui';
import { Login } from '@/widgets/auth';
import { Header } from '@/widgets/header';

const AuthPage: FC = () => (
  <Page.Container>
    <Header />
    <Page.Layout variant="fullsize">
      <Login />
    </Page.Layout>
  </Page.Container>
);

export default AuthPage;
