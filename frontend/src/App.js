import React, { useState, useEffect } from 'react';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import './App.css'
import axios from 'axios';

function NotesApp() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    const fetchPreviousNotes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/note/get-notes');
        setNotes(response.data.prevnotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchPreviousNotes();
  }, []);

  const handleAddNote = async (newNote) => {
    try {
      const response = await axios.post('http://localhost:3001/note/add-note', newNote);
     
      setNotes([...notes, response.data.note]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      
      await axios.delete(`http://localhost:3001/note/delete-note/${id}`);
      const updatedNotes = notes.filter((note) => note.id !== id);
    
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className='App'>
      <h1>Note it</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default NotesApp;
