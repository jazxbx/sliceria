import { Link } from '@tanstack/react-router';

const ROUTES = [
  { path: 'menu', name: 'Menu' },
  { path: 'about', name: 'About Us' },
  { path: 'contact', name: 'Contact' },
];

export default function NavLinks() {
  return (
    <nav className=''>
      <ul className='flex flex-col justify-evenly gap-8 md:flex-row items-center'>
        {ROUTES.map((route, i) => (
          <Link key={i} href={'/' + route.path} className='hover:text-yellow'>
            {route.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
