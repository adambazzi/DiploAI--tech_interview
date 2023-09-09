'use client';
import styles from './Notes.module.css'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [nValue, setNValue] = useState(0);

  const router = useRouter();


  const create = async() => {
    for(let i = 0; i < nValue; i++) {
      await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              title,
              completed
          })
      });
  }

    setTitle('');
    setCompleted(false);
    setNValue(0)

    router.refresh();
  }


// ... (rest of your imports)

  return (
    <form className={styles.form} onSubmit={create}>
      <h3 className={styles.formHeader}>Form</h3>
      <input
          className={styles.formInput}
          type="text"
          placeholder="Write in your title"
          onChange={(e) => setTitle(e.target.value)}/>
      <input
          className={styles.formInput}
          type="number"
          placeholder="Write in your n-value"
          onChange={(e) => setNValue(Number(e.target.value))}/>
      <label className={styles.formLabel} htmlFor={styles.true_false_dropdown}>Choose a value:</label>
      <select
          className={styles.formDropdown}
          name="trueFalse"
          id={styles.true_false_dropdown}
          onChange={(e) => setCompleted(e.target.value === 'true')}>
          <option value="true">True</option>
          <option value="false">False</option>
      </select>
      <button className={styles.formButton} onClick={create} type="button">
          Submit
      </button>
    </form>
  );

}
