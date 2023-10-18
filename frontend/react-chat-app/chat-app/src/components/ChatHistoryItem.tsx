import React, { useState } from 'react';

function ChatHistoryItem({ item, isLoading }: any) {
  const [showSources, setShowSources] = useState(false);

  const [expandedTextIndices, setExpandedTextIndices] = useState<number[]>([]);

  const toggleExpandedText = (index: number) => {
    setExpandedTextIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const isTextExpanded = (index: number) => {
    return expandedTextIndices.includes(index);
  };

  return (
    <div className="mb-4">
      <div className="font-bold">{item.question}</div>
      <div>{item.answer}</div>
      <button
        className="mt-2 text-blue-500 underline"
        onClick={() => setShowSources(!showSources)}
      >
        {showSources ? 'Hide Sources' : 'Show Sources'}
      </button>
      {showSources && (
        <div className="italic ml-4">
          <ul>
          {item.source_documents?.map((sourceDoc: any, i: number) => (
              <li key={i}>
                <div className="pl-4">
                  Page Content: {isTextExpanded(i) ? sourceDoc.page_content : sourceDoc.page_content.slice(0, 50)+ ' ...'}
                  {sourceDoc.page_content && sourceDoc.page_content.length > 50 && (
                    <button
                      className="text-blue-500 underline pl-8"
                      onClick={() => toggleExpandedText(i)}
                    >
                      {isTextExpanded(i) ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
                {isTextExpanded(i) && sourceDoc.page_content && (
                  <>
                    <div className="pl-12">
                      Source: {sourceDoc.metadata?.source}
                    </div>
                    <div className="pl-12">
                      Page: {sourceDoc.metadata?.page}
                    </div>
                  </>
                )}
              </li>
            ))};
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChatHistoryItem;
