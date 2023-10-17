// src/components/QuestionInput.tsx
import React, { useState } from 'react';
import axios from 'axios';
import SubmitButton from './SubmitButton'; 

interface QuestionInputProps {
  selectedDocument: string;
  onQuestionSubmit: (response: any) => void;
  onReset: () => void;
}

function QuestionInput({ selectedDocument, onQuestionSubmit, onReset }: QuestionInputProps) {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    // Call the onSubmit function to send the question to the backend
    axios
      .post('http://127.0.0.1:5000/qa', {
        docId: selectedDocument,
        q: question,
      })
      .then((response) => {
        onQuestionSubmit(response.data);
      })
      .catch((error) => {
        console.error('Error submitting question:', error);
      });

    setQuestion('');
  };

  return (

    // <div className="fixed bottom  w-2/3 mx-auto p-4">
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={handleQuestionChange}
          className="block w-full p-2 border rounded-md"
        />
          <div className="ml-auto text-right mr-0">
            <SubmitButton onClick={handleSubmit} />
            </div>
    </div>
      
  );
}

export default QuestionInput;
