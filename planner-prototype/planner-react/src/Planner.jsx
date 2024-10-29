import React, { useState } from 'react';

const Planner = ({course}) => {

    return (
        <div className="Planner">
            <p>{course.name}</p>
        </div>
    );
};

export default Planner;
