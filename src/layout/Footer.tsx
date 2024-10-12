// TODO: fixxx make this a component and render map
//create arr of objs
const infoSections = [
  {
    title: 'Location',
    details: '1990 John Doe Avenue,CA 15201',
  },
  {
    title: 'Hours',
    details:
      'Monday Closed | Tuesday, Wednesday, Thursday, Friday, Saturday, 10am-9pm | Sunday 10am-8pm',
  },
  {
    title: 'Contact Us',
    details: 'hello@cheesuscrust.com',
  },
];

export default function Footer() {
  return (
    <>
      <div className='bg-yellow-400 p-7'>
        <div className='flex flex-col gap-10 text-sm text-center md:flex-row md:justify-center md:gap-16 md:text-lg md:text-left md:py-12'>
          {infoSections.map((section, index) => (
            <div className='md:w-80' key={index}>
              <div className='text-xl font-bold'>{section.title}</div>
              <div>{section.details}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full text-center'>
        © 2024, cheesuscrust. All Rights Reserved.
      </div>
    </>
  );
}
