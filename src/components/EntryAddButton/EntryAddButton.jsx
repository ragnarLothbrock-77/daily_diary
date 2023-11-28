import './EntryAddButton.css';
import CardButton from '../CardButton/CardButton';

export default function EntryAddButton() {
  return (
    <CardButton className="add-button">
      <img className="add-button__icon" src="/src/assets/plus.svg" />
      New Entry
    </CardButton>
  );
}
