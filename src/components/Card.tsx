export default function Card({
  src,
  name,
  alt,
  desc,
  price,
}: {
  src: string;
  name: string;
  alt: string;
  desc: string;
  price: number;
}) {
  return (
    <div className='border-2 border-black shadow-lg bg-white text-center min-h-64 flex flex-col'>
      <div className='p-5 flex flex-col flex-grow justify-between'>
        <div className='overflow-hidden'>
          <img src={src} alt={alt} className='w-full h-52 object-contain' />
        </div>
        <h3 className='text-2xl md:text-3xl font-semibold mt-2 tracking-wider'>
          {name}
        </h3>
        <p className='text-slate-600 mt-3 flex-grow'>{desc}</p>
        <p className='mt-auto font-semibold'>${price}</p>
      </div>
    </div>
  );
}
