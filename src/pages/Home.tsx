import hero from '../assets/hero.jpg';
import about from '../assets/about2.jpg';
import about2 from '../assets/meg-jenson-d0SJnuNNeIM-unsplash.jpg';

// Hero Section component
const HeroSection = ({
  title,
  imgSrc,
  altText,
}: {
  title: string;
  imgSrc: string;
  altText: string;
}) => (
  <section
    id='hero'
    className='relative inline-block md:h-dvh w-full overflow-hidden'
  >
    <div className='absolute flex items-center h-full w-full text-center'>
      <h1 className='inline-block text-yellow text-shadow mx-8 text-3xl md:text-6xl md:text-[5rem] font-bold'>
        {title}
      </h1>
    </div>
    <img
      className='h-full w-full object-cover block'
      src={imgSrc}
      alt={altText}
    />
  </section>
);

// Text Section component
const TextSection = ({ text }: { text: string }) => (
  <section id='text' className='bg-brown'>
    <p className='text-cream text-xl md:text-3xl p-10 text-center italic'>
      {text}
    </p>
  </section>
);

// About Section Component
const AboutSection = ({
  imgSrc,
  imgAlt,
  heading,
  description,
}: {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  description: string;
}) => (
  <section
    id='about'
    className='md:p-20 bg-orange flex flex-col md:flex-row pt-20'
  >
    <div className='flex-1 relative'>
      {/* desktop heading overlay on image */}
      <div className='absolute z-10 left-[90%] w-[600px] text-balance'>
        <p className='md:text-7xl leading-7 md:text-yellow md:font-extrabold xl:block hidden'>
          {heading}
        </p>
      </div>
      <div className='md:my-6 md:ml-4 relative'>
        <img
          className='h-[900px] object-cover w-full md:h-full rotate-180 border-2 border-black'
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>

    <div className='flex-1 p-14 md:px-5 flex flex-col gap-5 text-center items-center lg:justify-evenly'>
      {/* mobile heading */}
      <p className='text-3xl md:text-5xl xl:hidden lg:text-5xl font-bold text-yellow text-left'>
        {heading}
      </p>
      <p className='md:mt-5 text-lg md:text-xl md:leading-loose text-[#FFF0D9] lg:text-2xl'>
        {description}
      </p>
      <div className='border-2 border-black'>
        <img
          src={about2}
          alt='pizza'
          className='md:w-[400px] md:h-[250px] lg:w-[500px] object-cover'
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  const heroTitle = 'Where every slice is a divine intervention';
  const aboutDescription = `
    Gouda mornin'! Cheddar you believe it? Mozzarella a tale as old as thyme. Swiss you were here to brie-lieve it! Fromage all these
    years, life's been grate, but sometimes it's nacho day. In queso emergency, break out the parmesan to grater good. Ricotta admit,
    we all have a fet-ta love for cheese, whether it's sharp like cheddar or smooth like camembert. Don’t feel bleu – the world is your
    charcuterie board, so curdle your worries and embrace the dairy!
  `;

  return (
    <main>
      <HeroSection title={heroTitle} imgSrc={hero} altText='Pizza Hero Image' />
      <TextSection text='"No need to get crusty about it, but this pizza’s got some serious cheddar charm."' />
      <AboutSection
        imgSrc={about}
        imgAlt='Cheesus Crust'
        heading='Welcome to Cheesus Crust'
        description={aboutDescription}
      />
    </main>
  );
}
