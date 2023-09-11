

'use client';
import styles from './Notes.module.css'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote(props) {
  const [nValue, setNValue] = useState(0);
  const {notes, setNotes} = props

  const router = useRouter();


  const get = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedNotes = []; // Accumulate responses here

    for (let i = 0; i < nValue; i++) {
      const barNum = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${barNum}`, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        updatedNotes.push(data); // Add data to the array
      } else {
        console.error('Failed to fetch data:', response.status, response.statusText);
      }
    }

    setNotes(updatedNotes); // Set the notes state after all requests are complete
    setNValue(0);

    router.refresh();
  };


  return (
    <form className={styles.form} onSubmit={get}>
      <h3 className={styles.formHeader}>Form</h3>
      <input
          className={styles.formInput}
          type="number"
          placeholder="Write in your n-value"
          value={nValue}
          onChange={(e) => setNValue(Number(e.target.value))}/>
      <button className={styles.formButton} onClick={get} type="button">
          Submit
      </button>
    </form>
  );

}
