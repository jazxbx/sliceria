// TODO: add react-router

export default function NavLinks() {
  return (
    <nav className=''>
      <ul className='flex flex-col justify-evenly gap-8 md:flex-row'>
        <li>
          <a href='/about' className='hover:text-yellow-400'>
            our pizzas
          </a>
        </li>
        <li>
          <a href='/menu' className='hover:text-yellow-400'>
            menu
          </a>
        </li>
        <li>
          <a href='/menu' className='hover:text-yellow-400'>
            contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
