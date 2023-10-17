import React from 'react';

interface ChatHistoryProps {
  chatHistory: Array<{
    question: string;
    answer: string;
    metadata: string;
  }>;
}

function ChatHistory({ chatHistory }: ChatHistoryProps) {
  return (
    <div className="border p-4 mt-4 max-h-96 overflow-y-auto">
      {chatHistory.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="font-bold">{item.question}</div>
          <div>{item.answer}</div>
          <div className="italic">{item.metadata}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;

