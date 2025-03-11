import img from '/mosque.jpg';
import { SearchBar } from '../../../index';

export const dashboardLinks = [
  {
    id: 1,
    text: 'Work',
    to: '/#work',
  },
  {
    id: 2,
    text: 'People',
    to: '/catalogue/people',
  },
  {
    id: 3,
    text: 'Cities',
    to: '/catalogue/cities',
  },
  {
    id: 4,
    text: 'Subjects',
    to: '/catalogue/subject',
  },
  {
    id: 5,
    text: 'Period',
    to: '/catalogue/period', 
  },
];

const Hero = () => {
  return (
    <section
      className='relative h-max lg:h-screen bg-cover bg-center flex items-start'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-35'></div>
      <div className='z-10 text-white  p-2 sm:px-4  sm:py-8 max-w-6xl  mx-auto  '>
        <h1 className='text-center sm:text-left text-3xl sm:text-6xl font-semibold my-12'>
          Discover Ancient Manuscripts
        </h1>
        <p className='text-center sm:text-left text-2xl sm:text-3xl md:w-[60%] mb-12'>
          Explore our comprehensive collection of historical manuscripts from
          across the Islamic world
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
