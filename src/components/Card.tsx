// TODO: Add alt to src

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
    <div className='border-2 border-black shadow-lg bg-white text-center'>
      <div className='p-5 flex flex-col'>
        <div className='overflow-hidden'>
          <img src={src} alt={alt} className='w-full object-scale-down' />
        </div>
        <h3 className='text-2xl md:text-3xl font-semibold mt-2 tracking-wider'>
          {name}
        </h3>
        <p className='text-slate-600 mt-3'>{desc}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
