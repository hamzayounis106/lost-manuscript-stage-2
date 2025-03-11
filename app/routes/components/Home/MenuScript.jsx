import FilterSideBar from '../FilterSideBar';
import MenuScriptComp from './MenuScriptComp';

const MenuScript = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-6xl  mx-auto my-12' id='work'>
      <FilterSideBar />
      {/* Main content */}
      <div className='md:w-3/4 w-full md:mx-4 p-4 md:shadow-lg rounded-xl bg-white'>
        <MenuScriptComp />
      </div>
    </div>
  );
};
export default MenuScript;
