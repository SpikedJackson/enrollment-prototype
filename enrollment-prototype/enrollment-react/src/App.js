
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Planner from './Planner';
import PlanCourse from './PlanCourse';
import Schedule from './Schedule.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header text = "Enrollment"/>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<PlanCourse />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Router>
      </div>
      
      
        {/* <PlanCourse /> */}
      

    </div>
  );
}


export default App;
