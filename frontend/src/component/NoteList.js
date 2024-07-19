import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './NotesList.css';

function NoteList({ notes, onDeleteNote }) {
  
  return (
    <div className='notes-container'>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}
            <DeleteIcon onClick={() => onDeleteNote(note.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
