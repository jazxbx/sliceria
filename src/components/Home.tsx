import hero from '../assets/hero.jpg';
import about from '../assets/about2.jpg';

export default function Home() {
  return (
    <>
      <section id='hero' className='md:h-dvh overflow-hidden'>
        <img className='h-full w-full object-cover' src={hero} alt='' />
      </section>
      <section id='about' className=' bg-white'>
        <div className='text-xl md:text-3xl p-10 text-center italic'>
          "No need to get crusty about it, but this pizza’s got some serious
          cheddar charm."
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='h-3/4'>
            <img className='object-contain w-full h-full' src={about} alt='' />
          </div>
          <div className='p-14 md:px-5 flex flex-col  gap-5 text-center bg-neutral-100'>
            <p className='text-3xl'>Welcome to Cheesus Crust</p>
            <p className='text-lg md:text-xl md:leading-loose'>
              Gouda mornin'! Cheddar you believe it? Mozzarella a tale as old as
              thyme. Swiss you were here to brie-lieve it! Fromage all these
              years, life's been grate, but sometimes it's nacho day. In queso
              emergency, break out the parmesan to grater good. Ricotta admit,
              we all have a fet-ta love for cheese, whether it's sharp like
              cheddar or smooth like camembert. Don’t feel bleu – the world is
              your charcuterie board, so curdle your worries and embrace the
              dairy!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
