import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './DiaryForm.module.css';
import cn from 'classnames';
import DeleteIcon from './../../assets/delete.svg';


const INITIAL_STATE = {
  title: true,
  text: true,
  date: true
};

export default function DiaryForm({ onSubmit }) {
  const [validFormState, setValidFormState] = useState(INITIAL_STATE);

  useEffect(() => {
    let timer;
    if (!validFormState.title || !validFormState.date || !validFormState.text) {
      timer = setTimeout(() => {
        setValidFormState(INITIAL_STATE);
        console.log('Clear state');
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [validFormState]);

  const addDiaryItem = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formProps = Object.fromEntries(data);

    let isValid = true;

    if (!formProps.title?.trim().length) {
      setValidFormState(state => ({ ...state, title: false }));
      isValid = false;
    } else {
      setValidFormState(state => ({ ...state, title: true }));
    }

    if (!formProps.text?.trim().length) {
      setValidFormState(state => ({ ...state, text: false }));
      isValid = false;
    } else {
      setValidFormState(state => ({ ...state, text: true }));
    }

    if (!formProps.date) {
      setValidFormState(state => ({ ...state, date: false }));
      isValid = false;
    } else {
      setValidFormState(state => ({ ...state, date: true }));
    }

    if (!isValid) {
      return;
    }

    onSubmit(formProps);
  };

  return (
    <form className={styles['diary-form']} onSubmit={addDiaryItem}>
      <div className={styles['form-row']}>
        <input type="text" name="title" className={cn(styles['input-title'], {
          [styles['invalide-input']]: !validFormState.title
        })} />
        <img src={DeleteIcon} alt="delete-icon" />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/src/assets/calendar.svg" alt="calendar-icon" />
          <span>Date</span>
        </label>
        <input type="date" name="date" id="date" className={cn(styles['input'], {
          [styles['invalide-input']]: !validFormState.date
        })} />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/src/assets/tags.svg" alt="calendar-icon" />
          <span>Tags</span>
        </label>
        <input type="text" name="tag" id="tag" className={styles['input']} />
      </div>


      <textarea name="text" className={cn(styles['input-title'], {
        [styles['invalide-input']]: !validFormState.text
      })} id="" cols="30" rows="10"></textarea>
      <Button text={'send'} />
    </form>
  );
}
