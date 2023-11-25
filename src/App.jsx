import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import DiaryItem from './components/DiaryItem/DiaryItem';

function App() {
  const data = [
    {
      title: 'Mountain walking',
      text: 'Lorem ipsum',
      date: new Date()
    },
    {
      title: 'Doctor visit',
      text: 'Lorem ipsum',
      date: new Date()
    }
  ];

  return (
    <>
      <h1>Diary</h1>
      <Button />
      <CardButton>
        <DiaryItem title={data[0].title} text={data[0].text} date={data[0].date} />
      </CardButton>
      <CardButton>
        <DiaryItem title={data[1].title} text={data[1].text} date={data[1].date} />
      </CardButton>
    </>
  );
}

export default App;
