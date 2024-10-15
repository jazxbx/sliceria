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
    <div className='max-w-xs mx-auto my-6 text-brown'>
      <div className='bg-white border-brown border-2 rounded-xl overflow-hidden'>
        <img src={src} alt={alt} className='w-full h-64 object-cover' />
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-2'>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
