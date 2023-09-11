
'use client';
import styles from './Notes.module.css';
import DataForm from './CreateNote';
import { useState } from 'react';




export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <DataForm notes={notes} setNotes={setNotes} />
    </div>
  );
}


function Note({ note }: any) {
  const modifiednote = {
    userId: note.userId,
    id: note.id,
    title: `Part 2 ${note.title}`,
    completed: note.completed,
  };

  return (
    <div className={styles.note}>
      <h2>note - Part 2</h2>
      <p>User ID: {modifiednote.userId}</p>
      <p>ID: {modifiednote.id}</p>
      <p>Title: {modifiednote.title}</p>
      <p>Completed: {modifiednote.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

