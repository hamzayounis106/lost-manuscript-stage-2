import PropTypes from "prop-types";
import { useState } from "react";

const MultiSelector = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <div className="relative">
      <h3 className="font-medium text-lg mb-2 mt-4">{title}</h3>
      
      <button 
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex justify-between items-center"
      >
        <span>
          {selectedOptions.length === 0 
            ? "Select options" 
            : `${selectedOptions.length} selected`}
        </span>
        <svg 
          className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2 max-h-60 overflow-auto">
            {options.map((item) => (
              <label key={item} className="block py-1 px-2 hover:bg-gray-100 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={item} 
                  className="mr-2"
                  checked={selectedOptions.includes(item)}
                  onChange={() => handleOptionClick(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

MultiSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultiSelector;