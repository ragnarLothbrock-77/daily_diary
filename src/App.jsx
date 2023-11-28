import './App.css';
import Header from './components/Header/Header';
import EntryAddButton from './components/EntryAddButton/EntryAddButton';
import Navbar from './layouts/Navbar/Navbar';
import Entryes from './components/Entryes/Entryes';
import Content from './layouts/Content/Content';
import { useState } from 'react';
import DiaryForm from './components/DiaryForm/DiaryForm';

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: 'Mountain walking',
  //   text: 'Lorem ipsum',
  //   date: new Date()
  // },
  // {
  //   id: 2,
  //   title: 'Doctor visit',
  //   text: 'Lorem ipsum',
  //   date: new Date()
  // },
  // {
  //   id: 3,
  //   title: 'Shopping',
  //   text: 'Lorem ipsum',
  //   date: new Date()
  // }
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id + 1)) : 1,
      title: item.title,
      text: item.text,
      date: new Date(item.date)
    }]);
  };

  return (
    <div className="app__wrapper">
      <Navbar>
        <Header />
        <EntryAddButton />
        <Entryes items={items} />
      </Navbar>
      <Content>
        <DiaryForm onSubmit={addItem} />
      </Content>
    </div>
  );
}

export default App;
