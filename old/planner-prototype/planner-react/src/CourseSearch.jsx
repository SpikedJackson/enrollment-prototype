import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import courses from './courses.js';
import CourseTable from './CourseTable';
import YearSelect from './YearSelect.jsx';

const CourseSearch = () => {
    const [selectedFilter, setSelectedFilter] = useState('all'); 
    const [selectedCourse, setSelectedCourse] = useState(null); 
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [currentYear, setCurrentYear] = useState(1);
    const [allYears, setAllYears] = useState(false);
    const [years, setYears] = useState([1, 2, 3, 4]);
    const [selectedYear, setSelectedYear] = useState(1);

    //filter the courses based on the selected filter
    const filteredCourses = selectedFilter === 'all' 
        ? courses 
        : courses.filter(course => course.filter === selectedFilter);

    const onCourseSelect = (course) => {
        setSelectedCourse(course); //use to display course information
    };

    
    const handleAddCourseToTable = () => {
        if (selectedCourse && !selectedCourses.some(course => course.code === selectedCourse.code)) {
            selectedCourse.year = selectedYear
            setSelectedCourses([...selectedCourses, selectedCourse]); //add course to the table
        }
    };

    const handleCourseRemove = (courseToRemove) => {
        setSelectedCourses(selectedCourses.filter(course => course.code !== courseToRemove.code)); //remove course from table
    };

    const handleYearChange = (event) => {
        setSelectedYear(Number(event.target.value));
    }

    return (
        <>
            <div className="box" style={{ display: 'flex', alignItems: 'flex-start', width: '100%', 
                // border: '1px solid black'  
                }}>
                <div style={{ flex: '0 1 300px', paddingRight: '20px' }}>
                    <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} courses={filteredCourses} />
                    <SearchBar 
                    courses={filteredCourses} 
                    onCourseSelect={onCourseSelect}
                    years={years} />
                </div>

                {selectedCourse && (
                    <div className="course-widget">
                        <h2>Selected Course Details:</h2>
                        <p><strong>{selectedCourse.code}</strong> - {selectedCourse.name}</p>
                        <p>{selectedCourse.description}</p>
                        <p>Prerequisites: {selectedCourse.prerequisites}</p>
                        <p>Antirequisites: {selectedCourse.antirequisites}</p>
                        <p>{selectedCourse.units} Unit(s)</p>
                        <div className="form-container">
                            <label htmlFor="yearSelect" className="select-label">Select Year:</label>
                            <form className="year-form">
                                {years.map((year) => (
                                <div key={year} className="radio-container">
                                    <input
                                    type="radio"
                                    value={year}
                                    name="year_select"
                                    id={`year-${year}`}
                                    checked={selectedYear === year}
                                    onChange={handleYearChange}
                                    className="radio-input"
                                    />
                                    <label htmlFor={`year-${year}`} className="radio-label">{year}</label>
                                </div>
                                ))}
                            </form>
                            <button className="add-to-plan-button" onClick={handleAddCourseToTable}>
                                + Add to Plan
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="box" style={{flex:'0.5'}}>
                <div className="vertical-stack-container">
                    <YearSelect currentYear = {currentYear} setCurrentYear = {setCurrentYear} allYears={allYears} setAllYears={setAllYears} years={years} setYears={setYears}/>
                    {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove = {handleCourseRemove} allYears={allYears} currentYear={currentYear} years={years}/>}
                </div>
                
            </div>
        </>
    );
};

export default CourseSearch;
