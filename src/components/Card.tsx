export default function Card({
  src,
  alt,
  title,
  desc,
}: {
  src: string;
  alt: string;
  title: string;
  desc: string;
}) {
  return (
    <div className='rounded-xl shadow-lg'>
      <div className='p-5 flex flex-col'>
        <div className='overflow-hidden'>
          <img src={src} alt={alt} className='w-full object-scale-down' />
        </div>
        <h3 className='text-2xl md:text-3xl font-semibold mt-2 tracking-wider'>
          {title}
        </h3>
        <p className='text-slate-600 mt-3'>{desc}</p>
      </div>
    </div>
  );
}
