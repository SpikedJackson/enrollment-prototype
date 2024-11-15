
import './App.css';
import Header from './Header';
import Schedule from './Schedule';
import CourseSearch from './CourseSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header text = "Enrolment"/>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<CourseSearch />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Router>
      </div>
      
      

    </div>
  );
}


export default App;
