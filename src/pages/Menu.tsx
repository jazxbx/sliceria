import pizza from '../assets/aldward-castillo-p1SBJANd0Q8-unsplash-removebg-preview.png';
import Card from '../components/Card';

export default function Menu() {
  // our daily bread - regular pizza
  // vegan profecy - vegan pizza
  // gluten-free gospel - gluten free pizza
  return (
    <div className='bg-white px-5 pt-9'>
      <h1 className='text-5xl md:text-7xl font-bold'>MENU</h1>
      <p className='font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores
        quas!
      </p>
      {/* Container */}
      <div className='grid md:grid-cols-3 lg:grid-cols-4'>
        <Card
          src={pizza}
          alt='pizza'
          title='Pizza Ipsum'
          desc='Meatball fresh tomatoes ham string cheese broccoli.'
        />
        <Card
          src={pizza}
          alt='pizza'
          title='Pizza Ipsum'
          desc='Meatball fresh tomatoes ham string cheese broccoli.'
        />
        <Card
          src={pizza}
          alt='pizza'
          title='Pizza Ipsum'
          desc='Meatball fresh tomatoes ham string cheese broccoli.'
        />
        <Card
          src={pizza}
          alt='pizza'
          title='Pizza Ipsum'
          desc='Meatball fresh tomatoes ham string cheese broccoli.'
        />
      </div>
    </div>
  );
}
