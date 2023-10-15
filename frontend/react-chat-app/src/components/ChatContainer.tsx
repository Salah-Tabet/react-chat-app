import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import ChatHistory from './ChatHistory';
import axios from 'axios';
import ResetButton from './ResetButton';

const ChatContainer = () => {
  const [selectedFilename, setSelectedFilename] = useState('Select a document');
  const [userQuestion, setUserQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  const handleQuestionSubmit = () => {
    axios
      .post('/send_question', { filename: selectedFilename, question: userQuestion })
      .then((response: any) => {
        setChatHistory([...chatHistory, response.data]);
        setUserQuestion('');
      })
      .catch((error) => {
        console.error('Error submitting question:', error);
      });
  };

  useEffect(() => {
    axios.get('/get_history')
      .then((response) => {
        setChatHistory(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving chat history:', error);
      });
  }, []);

  const handleReset = () => {
    setSelectedFilename('Select a document');
    setUserQuestion('');
    setChatHistory([]);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <DropdownMenu options={['Document 1', 'Document 2']} selectedOption={selectedFilename} onSelect={setSelectedFilename} />
      <TextInput value={userQuestion} onChange={setUserQuestion} />
      <SubmitButton onClick={handleQuestionSubmit} />
      <ResetButton onClick={handleReset} />
      <ChatHistory chatHistory={chatHistory} />
    </div>
  );
};

export default ChatContainer;
