// src/components/DocumentSelect.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DocumentSelectProps {
  onSelectDocument: (documentId: string) => void;
}

function DocumentSelect({ onSelectDocument }: DocumentSelectProps) {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState('');

  useEffect(() => {
    // Fetch the document list from Flask API
    axios.get('http://127.0.0.1:5000/list-docs')
      .then((response) => {
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  const handleDocumentChange = (e: any) => {
    setSelectedDocument(e.target.value);
    onSelectDocument(e.target.value);
  };

  return (
    // <div className="fixed bottom inset-x-0 w-2/3 mx-auto p-4 bg-white shadow-lg">
      <select
        id="documentSelect"
        value={selectedDocument}
        onChange={handleDocumentChange}
        className="block w-full p-2 border rounded-md"
      >
        <option value="">Select a document</option>
        {documents.map((doc: any) => (
          <option key={doc.docId} value={doc.docId}>
            {doc.docName}
          </option>
        ))}
      </select>
    // </div>
  );
}

export default DocumentSelect;
