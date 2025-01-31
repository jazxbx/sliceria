import logo from '../assets/logo.png';

import { Link } from '@tanstack/react-router';
export default function Logo() {
  return (
    <div>
      <Link to='/' className='italic text-3xl tracking-widest text-yellow'>
        <div className='flex items-center'>
          <img className='h-14' src={logo} alt='' />
          <p className='hidden md:block'>sliceria</p>
        </div>
      </Link>
    </div>
  );
}
