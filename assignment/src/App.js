import logo from './logo.svg';
import './App.css';
import List from './list';


function App() {
  return (
    <div className="App">
      <List items={[{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }]} />
    </div>
  );
}

export default App;
