import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { getInitialData, showFormattedDate } from './utils';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import './styles/style.css';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Separate notes into active and archived
  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="app">
      <h1>Aplikasi Catatan Pribadi</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NoteForm addNote={addNote} />
      <h2>All Notes</h2>
      <NoteList
        notes={activeNotes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
        showFormattedDate={showFormattedDate}
      />
      <h2>Archive</h2>
      <NoteList
        notes={archivedNotes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
        showFormattedDate={showFormattedDate}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));