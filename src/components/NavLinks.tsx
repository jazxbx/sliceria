import { Link } from '@tanstack/react-router';

export default function NavLinks() {
  return (
    <nav className=''>
      <ul className='flex flex-col justify-evenly gap-8 md:flex-row'>
        <Link href='/menu' className='hover:text-yellow'>
          menu
        </Link>
        <Link href='/about' className='hover:text-yellow'>
          our story
        </Link>
        <Link href='/contact' className='hover:text-yellow'>
          contact us
        </Link>
      </ul>
    </nav>
  );
}
