import './Entry.css';

export default function Entry({ title, text, date }) {
  const formatedData = new Intl.DateTimeFormat('ru-RU').format(date);

  return (
    <>
      <h2 className="diary-item__title">{title}</h2>
      <div className="diary-item__content">
        <div className="diary-item__date">{formatedData}</div>
        <div className="diary-item__text">{text}</div>
      </div>
    </>
  );
}
