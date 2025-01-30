import video from '../assets/hero-vid.mp4';
import pizza from '../assets/about2.jpg';
import Marquee from '../components/Marquee';

// TODO: add lazy loading to imgs
//TODO: Add button order here page which will show maps and nav to /store

const MARQUEETEXT = ['Pizza is always the answer ', '☻'];

// Hero Section component
const HeroSection = ({ video }: { video: string }) => (
  <section
    id='hero'
    className='relative h-screen flex justify-center text-center items-center'
  >
    <video
      muted
      autoPlay
      loop
      playsInline
      className='absolute object-cover top-0 left-0 w-screen h-screen '
    >
      <source src={video} type='video/mp4' />
    </video>
    <p className='z-10 text-cream font-bold text-[65px] top-4'>
      slice into <span className='text-yellow'>happiness</span>
    </p>
  </section>
);

// Marquee Section component
const MarqueeSection = () => (
  <section id='text' className='bg-yellow'>
    <Marquee>
      {MARQUEETEXT.map((text) => (
        <p
          className='text-brown text-xl md:text-4xl p-10 text-center uppercase'
          key={text}
        >
          {text}
        </p>
      ))}
    </Marquee>
  </section>
);

// About Section Component
const AboutSection = ({
  imgSrc,
  heading,
  description,
}: {
  imgSrc: string;
  heading: string;
  description: string;
}) => (
  <section
    id='about'
    className=' bg-orange flex flex-col md:flex-row gap-5 px-7 md:px-48 py-14 text-cream '
  >
    {/* right */}
    {/* TODO: where to add border? which div */}
    <div className='hidden md:block'>
      <img className='rotate-180' src={imgSrc} alt='' />
    </div>
    {/* left */}
    <div className='flex flex-col gap-7 items-center md:mt-7'>
      <h2 className='uppercase text-6xl relative right-16'>{heading}</h2>
      <p className='text-2xl md:text-xl'>{description}</p>
      {/* picture here */}
      <div
        className='max-w-56 w-full border-2 border-black
        '
      >
        <img className='' src={imgSrc} alt='' />
      </div>
    </div>
    {/* Marquee */}
  </section>
);

export default function Home() {
  const aboutDescription = `
   At Sliceria, we believe that pizza is more than just food – it’s an experience. Every slice is handcrafted with the finest ingredients, from our perfectly crisp crust to our rich, flavorful sauces and premium toppings. Whether you’re craving a classic favorite or a bold new creation, our menu is designed to satisfy every pizza lover. With a commitment to quality, freshness, and community, Sliceria is where friends and family come together to share great moments over delicious slices. Come taste the passion, one slice at a time!
  `;

  return (
    <main>
      <HeroSection video={video} />
      <MarqueeSection />
      <AboutSection
        imgSrc={pizza}
        heading='pizza — it’s good mood food'
        description={aboutDescription}
      />
    </main>
  );
}
