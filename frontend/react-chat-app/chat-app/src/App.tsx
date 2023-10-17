// src/App.tsx
import React, { useState } from 'react';
import ChatHistory from './components/ChatHistory';
import QuestionInput from './components/QuestionInput';
import DropdownSelect from './components/DocumentSelect';
import SubmitButton from './components/SubmitButton';

function App() {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [chatHistory, setChatHistory] = useState<any>([]);

  const handleQuestionSubmit = (response: any) => {
    // Update chat history with the response from the Flask API
    setChatHistory([...chatHistory, response]);
  };

  const handleReset = () => {
    // Clear chat history
    setChatHistory([]);
  };

  return (
    <div className="flex flex-col items-center h-screen">
    <div className="flex-grow bg-white shadow-lg rounded-md p-4 w-2/3 mx-auto mt-4">
      <ChatHistory chatHistory={chatHistory} />
    </div>
    <div className="bg-white shadow-lg rounded-md p-4 w-2/3 mx-auto mt-4 text-right">
      <DropdownSelect onSelectDocument={setSelectedDocument} />
      <QuestionInput
        selectedDocument={selectedDocument}
        onQuestionSubmit={handleQuestionSubmit}
        onReset={handleReset}
      />
      {/*<div className="text-right">
         <button onClick={handleReset} className="p-2 bg-red-500 text-white rounded-md">
          Reset
        </button>
      </div> */}
    </div>
  </div>
  );
}

export default App;
