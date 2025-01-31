import React from 'react';

const NoteList = ({ notes, deleteNote, toggleArchive, showFormattedDate }) => {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <p className="note-date">{showFormattedDate(note.createdAt)}</p>
          <button onClick={() => deleteNote(note.id)}>Hapus</button>
          <button onClick={() => toggleArchive(note.id)}>
            {note.archived ? 'Pindahkan' : 'Arsipkan'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;