import Logo from '../components/Logo';
import Nav from '../components/Nav';

export default function Header() {
  return (
    <nav className='sticky top-0 w-full z-20 flex-wrap px-7 py-5 flex bg-brown text-cream text-xl font-bold mx-auto justify-between'>
      <Logo />
      <Nav />
    </nav>
  );
}
