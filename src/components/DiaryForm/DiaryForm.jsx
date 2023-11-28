import { useState } from 'react';
import Button from '../Button/Button';
import './DiaryForm.css';

export default function DiaryForm({ onSubmit }) {
  const [inputData, setInputData] = useState('');

  const getInputdata = (event) => {
    setInputData(event.target.value);
  };

  const addDiaryItem = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formProps = Object.fromEntries(data);
    console.log(formProps);
    onSubmit(formProps);
  };

  return (
    <form className="diary-form" onSubmit={addDiaryItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={getInputdata} />
      <textarea name="text" id="" cols="30" rows="10"></textarea>
      <Button text={'send'} onClick={() => console.log('Pushed')} />
    </form>
  );
}
