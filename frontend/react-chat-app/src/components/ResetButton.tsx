import React from 'react';

const ResetButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md"
    >
      Reset
    </button>
  );
};

export default ResetButton;
