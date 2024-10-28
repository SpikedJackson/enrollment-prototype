
import React, { useState } from 'react';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Sample data for suggestions
    const data = ['COMPSCI 2ME3', 'COMPSCI 2LC3', 'COMPSCI 2C03', 'COMPSCI 2AC3', 'COMPSCI 3MEI', 'COMPSCI 3IS3'];

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            const filteredSuggestions = data.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]); // Clear suggestions
    };

    return (
        <>
            <div style={{position: 'absolute'}}>
                <div class="select-container">
                    <input
                        type="text"
                        class="search-input"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Search..."
                        style={{ width: '100%', padding: '10px' }}
                    />
                    <button class="select-button">
                            <img src = {require('./images/search.png')} class = "button-image"/>
                    </button>
                    {suggestions.length > 0 && (
                        <ul style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            border: '1px solid #ccc',
                            backgroundColor: 'white',
                            margin: 0,
                            padding: 0,
                            listStyleType: 'none',
                            zIndex: 1000
                        }}>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #ccc'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div class="select-container">
            <button class="select-button">
                <img src = {require('./images/filter.png')} class = "button-image"/>
            </button>
        </div>
    </>
    );
};

export default SearchBar;
