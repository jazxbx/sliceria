import hero from '../assets/hero.jpg';
import about from '../assets/about2.jpg';
import about2 from '../assets/about4.jpg';

export default function Home() {
  return (
    <>
      <section
        id='hero'
        className='relative inline-block md:h-dvh w-full overflow-hidden'
      >
        <div className='absolute flex items-center h-full w-full text-center'>
          <h1 className='inline-block text-[#ffe500] text-shadow mx-8 text-3xl md:text-6xl md:text-[5rem] font-bold'>
            Where every slice is a divine intervention
          </h1>
        </div>
        <img
          className='h-full w-full object-cover block'
          src={hero}
          alt='Pizza Hero Image'
        />
      </section>

      <section id='about' className='bg-yellow-400 '>
        <div className='text-xl md:text-3xl p-10 text-center italic'>
          "No need to get crusty about it, but this pizza’s got some serious
          cheddar charm."
        </div>
        <div className='flex flex-col md:flex-row bg-orange-700 pt-20'>
          <div className='absolute z-10 left-[25%]'>
            <p className='md:text-5xl md:text-yellow-400 md:font-bold md:block hidden'>
              Welcome to Cheesus Crust
            </p>
          </div>
          <div className='h-3/4 border-2 border-black md:mt-6 md:ml-4 relative'>
            <img
              className='object-contain w-full h-full rotate-180'
              src={about}
              alt=''
            />
          </div>
          <div className='p-14 md:px-5 flex flex-col  gap-5 text-center items-center'>
            <p className='text-3xl md:hidden font-bold text-yellow-400'>
              Welcome to Cheesus Crust
            </p>
            <p className='text-lg md:text-xl md:leading-loose text-[#FFF0D9]'>
              Gouda mornin'! Cheddar you believe it? Mozzarella a tale as old as
              thyme. Swiss you were here to brie-lieve it! Fromage all these
              years, life's been grate, but sometimes it's nacho day. In queso
              emergency, break out the parmesan to grater good. Ricotta admit,
              we all have a fet-ta love for cheese, whether it's sharp like
              cheddar or smooth like camembert. Don’t feel bleu – the world is
              your charcuterie board, so curdle your worries and embrace the
              dairy!
            </p>
            <div className='w-[300px] h-[200px] md:h-[300px] overflow-hidden border-2 border-black'>
              <img
                src={about2}
                alt='pizza'
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
