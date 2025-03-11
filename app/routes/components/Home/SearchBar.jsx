import { FaSearch } from 'react-icons/fa';
import { dashboardLinks } from './Hero';
import { UseFilterContext } from '../../../context/FilterContext';
import ButtonLinks from '../ButtonLinks';
import SearchIcon from './SearchIcon';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, handleSearchClick } = UseFilterContext();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };
  
  return (
    <div className='mb-12 '>
      <div className='flex items-center mb-12 relative gap-x-2 md:gap-x-4'>
        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        <input
          type='text'
          placeholder='Search manuscripts, authors, or subjects'
          className='w-full pl-10 bg-white p-3 text-black rounded-md border border-[#CCCCCC] outline-0'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon handleSearchClick={handleSearchClick}/>
      </div>
      <ButtonLinks links={dashboardLinks} />
    </div>
  );
};

export default SearchBar;
