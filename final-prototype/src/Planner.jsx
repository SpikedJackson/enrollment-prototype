import React, { useState } from 'react';
import Requirements from './Requirements';
import CourseSearchPlanner from './CourseSearchPlanner';

function Planner() {

    return (
        <div className="container">
            <div className="box" style={{flex:'0.5'}}>
            <Requirements />
            </div>
            <CourseSearchPlanner />
        </div>
    );
};

export default Planner;
