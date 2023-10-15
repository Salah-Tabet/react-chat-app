import React from 'react';

const ChatHistory: React.FC<Props> = ({ chatHistory }) => {
  return (
    // <div className="w-96 h-80 border border-gray-300 p-4 overflow-y-auto">
    <div className="w-96 h-80 p-4 overflow-y-auto">
        {chatHistory.map((entry) => (
            <div key={entry.id} className="mb-4 border-b border-gray-300 pb-4">
            <div className="text-blue-600 font-bold">{entry.question}</div>
            <div className="text-gray-800">{entry.answer}</div>
            <div className="text-gray-400 italic">{entry.metadata}</div>
            </div>
        ))}
    </div>
  );
};

export default ChatHistory;
