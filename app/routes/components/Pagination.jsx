// Pagination.js
import React from 'react';

const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className='flex justify-center gap-4 my-8'>
      <button
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-200 cursor-pointer'
        }`}
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
      >
        Previous
      </button>

      <div className='flex gap-2'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 ${
              number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } rounded-md cursor-pointer`}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-200 cursor-pointer'
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
