import logo from './logo.svg';
import './App.css';

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
