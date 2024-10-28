
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Requirements from './Requirements';

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
      </div>

    </div>
  );
}


export default App;
