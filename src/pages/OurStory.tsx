import owners from '../assets/aleksandra-sapozhnikova-ObkUzac2QpQ-unsplash.jpg';
import shop from '../assets/darwin-boaventura-8xr9zPdb_Vk-unsplash.jpg';

type StorySectionProps = {
  img: string;
  imgAlt: string;
  content: React.ReactNode;
  reverse?: boolean;
};

const StorySection = ({ img, imgAlt, content, reverse }: StorySectionProps) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-2 py-6 md:py-10 items-center text-cream`}
    >
      <div className='flex-1 border-black border-2 '>
        <img src={img} alt={imgAlt} />
      </div>
      <div className='flex-1 p-7 md:text-xl'>{content}</div>
    </section>
  );
};

export default function OurStory() {
  return (
    <div id='our-story' className='p-10 bg-green'>
      <StorySection
        img={owners}
        imgAlt='Owners'
        content={
          <>
            <h1 className='text-center text-3xl font-extrabold md:text-5xl  mb-7'>
              Genesis of Cheesus Crust
            </h1>
            <p>
              Pizza ipsum dolor amet meatball philly chicken pizza roll personal
              garlic spinach red onions sausage peppers. Lasagna philly chicken
              onions, peppers bacon garlic sauce NY style ranch steak platter
              white garlic garlic parmesan pizza bbq sauce. Hawaiian white pizza
              garlic parmesan ricotta pie bbq sauce garlic sauce pan fresh
              tomatoes pork. Chicago style chicken mozzarella white garlic
              parmesan ham pineapple bianca bbq rib broccoli bbq stuffed crust
              platter peppers melted.
            </p>
          </>
        }
      />
      <StorySection
        img={shop}
        imgAlt='Shop'
        content={
          <p>
            Chicago style chicken mozzarella white garlic parmesan ham pineapple
            bianca bbq rib broccoli bbq stuffed crust platter peppers melted
            cheese. Red onions green bell peppers parmesan burnt mouth pork,
            peppers sauteed onions pepperoni Chicago style pie mayo anchovies.
            Garlic parmesan garlic ham pizza roll. Sausage white garlic
            personal, green bell peppers extra cheese red onions bbq rib Chicago
            style.
          </p>
        }
        reverse
      />
    </div>
  );
}
