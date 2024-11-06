import React from 'react';
import { Link } from 'react-router-dom';

function Schedule() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="box1-container">
            <div className="courses-header">
              Courses
            </div>
            <div className="course-container1">
              <div className="course-box">
                <p className="course-code">★ COMPSCI 2LC3</p>
              </div>
              <div className="course-box">
                <p className="course-code">★ COMPSCI 2ME3</p>
              </div>
              <div className="course-box">
                <p className="course-code">★ COMPSCI 2C03</p>
              </div>
              <div className="course-box">
                <p className="course-code">ASTRON 2B03</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="timetable">
            <div className="timetable-header">Weekly Course Schedule</div>
            <div className="time-column">Time</div>
            <div className="day-column">Monday</div>
            <div className="day-column">Tuesday</div>
            <div className="day-column">Wednesday</div>
            <div className="day-column">Thursday</div>
            <div className="day-column">Friday</div>

            {/* Time Slots (9:00 AM - 5:00 PM) with Set Course Assignments */}
            <div className="time-column">9:00 - 10:00</div>
            <div className="course-slot compsci-2lc3">★ COMPSCI 2LC3</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2me3">★ COMPSCI 2ME3</div>
            <div className="course-slot"></div>

            <div className="time-column">10:00 - 11:00</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2c03">★ COMPSCI 2C03</div>
            <div className="course-slot astron-2b03">ASTRON 2B03</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>

            <div className="time-column">11:00 - 12:00</div>
            <div className="course-slot compsci-2me3">★ COMPSCI 2ME3</div>
            <div className="course-slot"></div>
            <div className="course-slot astron-2b03">ASTRON 2B03</div>
            <div className="course-slot compsci-2lc3">★ COMPSCI 2LC3</div>
            <div className="course-slot"></div>

            <div className="time-column">12:00 - 1:00</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2c03">★ COMPSCI 2C03</div>
            <div className="course-slot astron-2b03">ASTRON 2B03</div>

            <div className="time-column">1:00 - 2:00</div>
            <div className="course-slot compsci-2lc3">★ COMPSCI 2LC3</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2me3">★ COMPSCI 2ME3</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>

            <div className="time-column">2:00 - 3:00</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2c03">★ COMPSCI 2C03</div>
            <div className="course-slot"></div>
            <div className="course-slot astron-2b03">ASTRON 2B03</div>
            <div className="course-slot"></div>

            <div className="time-column">3:00 - 4:00</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2me3">★ COMPSCI 2ME3</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2lc3">★ COMPSCI 2LC3</div>
            <div className="course-slot"></div>

            <div className="time-column">4:00 - 5:00</div>
            <div className="course-slot"></div>
            <div className="course-slot compsci-2c03">★ COMPSCI 2C03</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot astron-2b03">ASTRON 2B03</div>
          </div>
        </div>
      </div>
      <div class="to_timetable2">
        <Link to="/">
            ◀ Return to Timetable
        </Link>
      </div>
      <div class="to_enroll">
        Enroll ▶
      </div>
    </>
  );
}

export default Schedule;
