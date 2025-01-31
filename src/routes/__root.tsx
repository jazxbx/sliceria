import data from '../data/data.json';
import logo from '../assets/logo.png';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer
        restaurant={data.restaurant}
        hours={data.restaurant.hours}
        img={logo}
      />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
