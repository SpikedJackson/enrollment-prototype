
import React, { useState } from 'react';
import courses from './courses.js'

const SearchBar = ({ onCourseSelect }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);



    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            const filteredSuggestions = courses.filter(course =>
                course.name.toLowerCase().includes(value.toLowerCase()) || //make sure comparison between input and stored data is case sensitive
                course.code.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (course) => {
        setInputValue(course);
        setSuggestions([]); // clear suggestions
        onCourseSelect(course);
        
    };

    return (
        <div style={{ position: 'relative'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={inputValue.code}
                    onChange={handleChange}
                    placeholder="Search for a course..."
                    className="search-input"
                />
                <div className="select-container">
                    <button className="select-button">
                        <img src={require('./images/search.png')} alt="Search" className="button-image" />
                    </button>
                </div>
                <div className="select-container">
                    <button className="select-button">
                        <img src={require('./images/filter.png')} alt="Filter" className="button-image" />
                    </button>
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className="search-dropdown">
                    {suggestions.map((course, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(course)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #D4CDF4',
                                borderRight: '1px solid #D4CDF4',
                                borderLeft: '1px solid #D4CDF4',
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4CDF4'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                        >
                            {course.code} - {course.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
