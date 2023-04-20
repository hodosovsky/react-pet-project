import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
      <p>footer</p>
    </>
  );
};
