import React, { useState } from 'react';

const Filters = ({ setSelectedFilter }) => {

    return (
        <div className="box3-container">
            <div className="tab">
                <button className="link" onClick={() => setSelectedFilter('all')}>All</button>
                <button className="link" onClick={() => setSelectedFilter('required')}>Required</button>
                <button className="link" onClick={() => setSelectedFilter('electives')}>Electives</button>
            </div>
        </div>
    );
};

export default Filters;
