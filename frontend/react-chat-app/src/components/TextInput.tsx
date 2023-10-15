import React from 'react';

const TextInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-64 py-2 px-4 border border-gray-300 rounded-md"
      placeholder="Ask a question..."
    />
  );
};

export default TextInput;
