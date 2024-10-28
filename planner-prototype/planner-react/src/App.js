
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Requirements from './Requirements';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="box">
          <SearchBar />
        </div>
        <div class="box">
          <Requirements />
        </div>
      </div>

    </div>
  );
}


export default App;
