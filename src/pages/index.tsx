import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WithAuth } from './lib/with-auth';
import { WithoutAuth } from './lib/without-auth';

const HomePage = lazy(() => import('./home'));
const AuthPage = lazy(() => import('./auth'));
const TransactionPage = lazy(() => import('./transaction'));
const CategoryPage = lazy(() => import('./category'));

export const Routing: FC = () => (
  <Suspense fallback={<div />}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <WithoutAuth>
              <AuthPage />
            </WithoutAuth>
          }
        />
        <Route
          path="/home"
          element={
            <WithAuth>
              <HomePage />
            </WithAuth>
          }
        />
        <Route
          path="/transaction"
          element={
            <WithAuth>
              <TransactionPage />
            </WithAuth>
          }
        />
        <Route
          path="/category"
          element={
            <WithAuth>
              <CategoryPage />
            </WithAuth>
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
