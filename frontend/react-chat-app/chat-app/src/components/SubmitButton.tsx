// src/components/SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
}

function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="block mx-auto mt-4 p-2 bg-green-500 text-white rounded-md"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
