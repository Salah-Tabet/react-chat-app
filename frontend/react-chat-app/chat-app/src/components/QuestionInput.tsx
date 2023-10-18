// src/components/QuestionInput.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubmitButton from './SubmitButton'; 

interface QuestionInputProps {
  selectedDocument: string;
  onQuestionSubmit: (response: any) => void;
  onReset: () => void;
}

function QuestionInput({ selectedDocument, onQuestionSubmit, onReset }: QuestionInputProps) {
  const [question, setQuestion] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQuestion = e.target.value;
    setQuestion(updatedQuestion);
    setIsSubmitDisabled(!selectedDocument || !updatedQuestion);
  };
  const handleSubmit = () => {
    const url = `http://127.0.0.1:5000/qa?q=${question}&docId=${selectedDocument}`;
    setIsLoading(true);
    setTimeout(() => {
    axios
      .get(url)
      .then((response) => {
        onQuestionSubmit(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error submitting question:', error);
        setIsLoading(false);
      });

    setQuestion('');
    setIsSubmitDisabled(true);
  }, 5000);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && !isSubmitDisabled) {
      handleSubmit();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isSubmitDisabled]);

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
            <SubmitButton onClick={handleSubmit} disabled={isSubmitDisabled} isLoading = {isLoading} />
            </div>
           
    </div>
  );
}

export default QuestionInput;
