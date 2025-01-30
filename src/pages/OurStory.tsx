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
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
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
            <h2 className='text-yellow text-3xl font-extrabold md:text-6xl  mb-7'>
              Meet the Makers
            </h2>
            <p>
              Sliceria is more than just a pizza place—it’s a passion project
              brought to life by a duo of food enthusiasts, Maria and Bea. After
              years of experimenting with dough, sauces, and toppings, they
              decided to combine their love for authentic, handmade pizza with a
              mission to create a space where people could experience the art of
              pizza in its purest form.
            </p>
            <p className='mt-6'>
              Maria brings a background in culinary arts, ensuring each dish is
              crafted with a chef’s touch, while Bea adds a passion for
              hospitality and creating unforgettable dining experiences.
              Together, they’ve cultivated an atmosphere that feels like
              home—welcoming, warm, and full of flavor.
            </p>
          </>
        }
      />
      <StorySection
        img={shop}
        imgAlt='Shop'
        content={
          <>
            <p>
              At Sliceria, every slice is made with the finest, locally sourced
              ingredients. From the moment the dough is kneaded to the time it
              hits your table, we focus on quality, flavor, and tradition. Our
              menu offers a wide range of options, from classic favorites to
              innovative new creations, all designed to satisfy your pizza
              cravings.
            </p>
            <p className='mt-6'>
              Whether you’re grabbing a quick slice or enjoying a meal with
              family and friends, Sliceria is here to bring people together with
              great food and a welcoming environment. Come visit us and
              experience what makes our pizza different—because at Sliceria,
              every slice is a work of love.
            </p>
          </>
        }
        reverse
      />
    </div>
  );
}
