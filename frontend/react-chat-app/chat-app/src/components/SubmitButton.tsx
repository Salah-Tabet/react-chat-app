// src/components/SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

function SubmitButton({ onClick, disabled  }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`}block mx-auto mt-4 p-2 bg-green-500 text-white rounded-md ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
          : 'bg-green-500 text-white' }`}
      disabled={disabled} 
    >
      Submit
    </button>
  );
}

export default SubmitButton;
