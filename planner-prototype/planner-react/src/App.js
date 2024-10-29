
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Requirements from './Requirements';
import YearSelect from './YearSelect';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box">
          <SearchBar />
        </div>
        <div className="box">
          <Requirements />
        </div>
        <div className="box">
          <YearSelect />
        </div>
      </div>

    </div>
  );
}


export default App;
