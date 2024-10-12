import { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
import NavLinks from './NavLinks';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex justify-between'>
        <div className='hidden w-full justify-between md:flex '>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <MdOutlineClose /> : <RiMenuFill />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex flex-col items-center basis-full md:hidden justify-center h-[30vh]'>
          <NavLinks />
        </div>
      )}
    </>
  );
}
