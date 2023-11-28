import './Entryes.css';
import Entry from '../Entry/Entry';
import CardButton from '../CardButton/CardButton';

export default function Entryes({ items }) {
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  };

  if (items.length === 0) {
    return <p>No entryes yet </p>;
  }

  return <ul className="entryes-list">
    {items.sort(sortItems).map(el => (
      <CardButton key={el.id}>
        <Entry
          title={el.title}
          date={el.date}
          text={el.text}
        />
      </CardButton>
    ))}
  </ul>;
}
