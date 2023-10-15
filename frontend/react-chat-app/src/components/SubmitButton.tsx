import React from 'react';

const SubmitButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
