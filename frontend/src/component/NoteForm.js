import React, { useState } from 'react';
import './NoteForm.css'

function NoteForm({ onAddNote }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== '') {
      onAddNote({ text: inputValue });
    
      setInputValue('');
    }
  };

  return (
    <div className='note-form'>
      <textarea
        type="text"
        placeholder="Enter your note"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddButtonClick}>Add Note</button>
    </div>
  );
}

export default NoteForm;
