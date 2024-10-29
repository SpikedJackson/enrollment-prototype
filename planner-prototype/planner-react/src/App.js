
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Requirements from './Requirements';
import Planner from './Planner';
import PlanCourse from './PlanCourse';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box">
          <Requirements />
        </div>
        <PlanCourse />
      </div>

    </div>
  );
}


export default App;
