import data from '../data/data.json';

export default function Order() {
  return (
    <div className='bg-green h-screen  flex flex-col py-7 text-cream text-2xl md:flex-row p-5 md:p-14 '>
      {/* left */}
      <div className='text-'>
        <p className='text-yellow italic'>We're located at</p>
        <div>{data.restaurant.name}</div>
        <div>{data.restaurant.location}</div>
        <div>{data.restaurant.contact.phone}</div>
      </div>
      {/* right */}
      <div>map</div>
    </div>
  );
}
