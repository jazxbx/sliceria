import Card from '../components/Card';
import data from '../data/data.json';

export default function Menu() {
  return (
    <div className='bg-orange flex flex-col items-center p-5 md:p-14'>
      <h1 className='text-5xl md:text-7xl font-bold text-cream'>OUR MENU</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9'>
        {/* Loop through items in each category */}
        {data.menu.categories.map((category) =>
          category.items.map((item) => (
            <Card
              key={item.id}
              src={item.img}
              alt={item.name}
              name={item.name}
              desc={item.description}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
}
