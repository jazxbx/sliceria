import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, RouterProvider, createRouter } from '@tanstack/react-router';
import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => (
    <div className='h-screen bg-yellow flex justify-center items-center'>
      <div className='flex flex-col items-center text-xl gap-3'>
        <h1 className='text-3xl'>Sorry, this page doesn't exist</h1>
        <Link href='/'>let's get back to getting 🍕</Link>
      </div>
    </div>
  ),
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
