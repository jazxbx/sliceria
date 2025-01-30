import Logo from '../components/Logo';
import Nav from '../components/Nav';
// TODO: add route when button clicked

export default function Header() {
  return (
    <nav className='sticky top-0 w-full z-20 flex-wrap px-10 py-6 flex bg-brown text-cream text-xl font-bold mx-auto justify-between'>
      <Logo />
      <div className='flex items-center'>
        <button className='bg-yellow text-brown py-2 px-4 cursor-pointer rounded-xl mr-6 hover:bg-orange'>
          order here
        </button>
        <Nav />
      </div>
    </nav>
  );
}
