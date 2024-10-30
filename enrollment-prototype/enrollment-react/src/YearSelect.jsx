import React, { useState } from 'react';

const YearSelect = () => {
    const [years, setYears] = useState([1, 2, 3, 4]);
    const [allYears, setAllYears] = useState(false);
    const [currentYear, setCurrentYear] = useState(1);

    const handlePlusClick = () => {
        var newYears = years.slice();
        newYears.push(newYears.length + 1);
        setYears(newYears);
    }

    const handleYearClick = (year) => {
        setAllYears(false);
        setCurrentYear(year);
    }

    return (
        <div className="year-select">
            <div className="select-container">
                <button onClick={() => setAllYears(true)} className="select-button">All Years</button>
            </div>
            {years.map((year) => (
                <div className="select-container">
                    <button onClick={() => handleYearClick(year)} className="select-button">{year} </button>
                </div>
            ))}
            <div className="select-container">
                <button onClick={() => handlePlusClick()} className="select-button">+</button>
            </div>
            
            <br />{allYears ? "All Years" : currentYear}
        </div>
    );
};


export default YearSelect;