
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Planner from './Planner';
import PlanCourse from './PlanCourse';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <PlanCourse />
      </div>

    </div>
  );
}


export default App;
