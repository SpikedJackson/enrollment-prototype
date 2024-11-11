
import './App.css';
import Header from './Header';
import Requirements from './Requirements';
import CourseSearch from './CourseSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box" style={{flex:'0.5'}}>
          <Requirements />
        </div>
        <CourseSearch />
      </div>

    </div>
  );
}


export default App;
