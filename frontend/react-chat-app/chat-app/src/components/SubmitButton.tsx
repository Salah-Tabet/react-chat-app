// src/components/SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isLoading: boolean;
}

function SubmitButton({ onClick, disabled, isLoading }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`}block mx-auto mt-4 p-2 text-white rounded-md ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
          : 'bg-green-500 text-white' }`}
      disabled={disabled} 
    >
       {isLoading ? (
             <div className="text-center">
               <div className="animate-pulse">Loading...</div>
             </div>
           ) : "Submit"}
      
    </button>
  );
}

export default SubmitButton;
