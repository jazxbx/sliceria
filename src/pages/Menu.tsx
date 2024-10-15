import pizza from '../assets/food-photographer-Ew_9G3UfsA0-unsplash.jpg';
import Card from './Card';

export default function Menu() {
  // our daily bread - regular pizza
  // vegan profecy - vegan pizza
  // gluten-free gospel - gluten free pizza
  return (
    <div className='bg-cream px-5 pt-9'>
      <p className='font-extrabold text-2xl'>Our Daily Bread</p>
      <p className='font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores
        quas!
      </p>
      <Card
        src={pizza}
        alt='pizza'
        title='Pizza Ipsum'
        desc='Meatball fresh tomatoes ham string cheese broccoli. Extra sauce bianca white garlic NY style sausage chicken and bacon pepperoni bbq party large white pizza sauteed onions.'
      />
    </div>
  );
}
