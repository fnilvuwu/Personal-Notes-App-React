import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addNote(title, body);
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div>
        <label>Judul:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
        />
        <small>{50 - title.length} karakter tersisa</small>
      </div>
      <div>
        <label>Isi:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;