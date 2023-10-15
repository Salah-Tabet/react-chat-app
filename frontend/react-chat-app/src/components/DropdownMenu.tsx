import React from 'react';

const DropdownMenu: React.FC<Props> = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">
        {selectedOption}
      </button>
      {/* Dropdown content */}
      <div className="absolute right-0 mt-2 w-48 py-2 bg-white border border-gray-300 rounded-md shadow-lg">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => onSelect(option)}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
