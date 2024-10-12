// TODO: add react-router

export default function NavLinks() {
  return (
    <nav className=''>
      <ul className='flex flex-col justify-evenly gap-8 md:flex-row'>
        <li>
          <a href='/about' className='hover:text-red-900'>
            menu
          </a>
        </li>
        <li>
          <a href='/menu' className='hover:text-red-900'>
            our story
          </a>
        </li>
        <li>
          <a href='/menu' className='hover:text-red-900'>
            contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
