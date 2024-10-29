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
        <div className="YearSelect">
            <button onClick={() => setAllYears(true)}>All Years</button>
            {years.map((year) => (
                <button onClick={() => handleYearClick(year)}>{year}</button>
            ))}
            <button onClick={() => handlePlusClick()}>+</button>
            <br />{allYears ? "All Years" : currentYear}
        </div>
    );
};

export default YearSelect;
