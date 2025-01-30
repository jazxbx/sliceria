import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
