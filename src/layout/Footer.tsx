type Restaurant = {
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
  };
};

type Hours = {
  [key: string]: string;
};

type FooterProps = {
  restaurant: Restaurant;
  hours: Hours;
  img: string;
};

export default function Footer({ restaurant, hours, img }: FooterProps) {
  return (
    <div className='bg-brown p-7'>
      <div className='flex flex-col gap-10 items-center text-sm text-center md:flex-row md:justify-center md:gap-16 md:text-lg md:text-left md:py-12'>
        <div>
          <img className='max-w-[100%] block h-auto w-56' src={img} alt={img} />
        </div>
        {/* restaurant info */}
        <div className='pr-9 pl-9 md:w-80 text-yellow'>
          <div className='uppercase text-xl font-bold'>{restaurant.name}</div>
          <div>{restaurant.location}</div>
          <div>{restaurant.contact.phone}</div>
          <div>{restaurant.contact.email}</div>
        </div>
        {/* hours */}
        <div className='pr-9 pl-9 md:w-80 text-yellow'>
          <div className='uppercase text-xl font-bold'>Hours:</div>
          {Object.entries(hours).map(([day, time]: [string, string]) => (
            <div key={day}>
              {day}: {time}
            </div>
          ))}
        </div>
      </div>
      <div className='text-yellow text-center lg:text-right text-sm mt-10 '>
        created with ❤️ by <a href='https://github.com/jazxbx/sliceria'>jazz</a>
      </div>
    </div>
  );
}
