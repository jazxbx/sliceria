import Logo from '../components/Logo';
import Nav from '../components/Nav';

export default function Header() {
  return (
    <nav className='fixed top-0 w-full flex-wrap px-7 py-5 flex bg-black text-yellow-400 mx-auto justify-between'>
      <Logo />
      <Nav />
    </nav>
  );
}
