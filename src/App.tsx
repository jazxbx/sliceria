import './App.css';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Header from './layout/Header';
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Menu />
      <OurStory />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
