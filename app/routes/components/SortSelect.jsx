const SortSelect = ({ sortOrder, handleSortChange }) => {
  return (
    <div className='flex gap-4 items-center'>
      <select
        id='sort'
        value={sortOrder}
        onChange={(e) => handleSortChange(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline focus:outline-gray-600 focus:border-gray-600 appearance-none pr-8 w-48'
      >
        <option value='default'>Relevance</option>
        <option value='atoz'>A-Z</option>
        <option value='ztoa'>Z-A</option>
      </select>
      {/* Add a custom arrow to align with padding */}
      <div className='-ml-10 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-4 h-4 text-gray-600'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8 9l4 4 4-4' />
        </svg>
      </div>
    </div>
  );
};

export default SortSelect;
