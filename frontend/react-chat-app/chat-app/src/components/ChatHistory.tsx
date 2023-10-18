import React, { useEffect, useRef, useState } from 'react';
import ChatHistoryItem from './ChatHistoryItem';

interface ChatHistoryProps {
  chatHistory: Array<{
    question: string;
    answer: string;
    source_documents: Array<{
      page_content: string;  // Define the type for page_content
      metadata: {
        source: string;
        page: number;
      }[];
    }>[];
  }>;
}

function ChatHistory({ chatHistory }: ChatHistoryProps) {
  const chatContainerRef = useRef<HTMLDivElement | null>(null); 

  const [showSources, setShowSources] = useState(false);

  const truncateText = (text:any, maxLength:any) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) { // Check if the ref is not null
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom when chat history changes
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);



  return (
    // <div className="border p-4 mt-4 max-h-96 overflow-y-auto flex flex-col-reverse">
    <div  ref={chatContainerRef} className="border p-4 mt-4 max-h-96 overflow-y-auto divide-y" style={{ display: 'flex', flexDirection: 'column' }}>
    {chatHistory.map((item, index) => (
        <div key={index} className="mb-4">
           <ChatHistoryItem item = {item}/>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;

