import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Schedule() {
    const location = useLocation();
    const {selectedCourses} = location.state || {selectedCourses: []}; //make it an empty array if no data passed

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = ['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00', '4:00 - 5:00' ];
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="box1-container">
            {/* <div className="courses-header">
              Courses
            </div> */}

            <div className="course-container1">
            {selectedCourses.length === 0 ? (
                <p>No courses selected yet.</p>
              ) : (
                selectedCourses.map((course, index) => (
                  <div key={index} className="course-box">
                    <p className="course-code">★ {course.code}</p>
                  </div>
                ))
              )}
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

            <div className="time-column">9:00 - 10:00</div>
            {selectedCourses.length === 0 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-blue">★ {selectedCourses[0].code}</div>
              )}
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 1 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-pink">★ {selectedCourses[1].code}</div>
              )}
            <div className="course-slot"></div>

            <div className="time-column">10:00 - 11:00</div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 2 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-orange">{selectedCourses[2].code}</div>
              )}
            {selectedCourses.length <= 3 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot dark-green">{selectedCourses[3].code}</div>
              )}
            <div className="course-slot"></div>
            <div className="course-slot"></div>

            <div className="time-column">11:00 - 12:00</div>
            {selectedCourses.length <= 1 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-pink">★ {selectedCourses[1].code}</div>
              )}
            <div className="course-slot"></div>
            {selectedCourses.length <= 4 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot red">{selectedCourses[4].code}</div>
              )}
            {selectedCourses.length === 0 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-blue">★ {selectedCourses[0].code}</div>
              )}
            <div className="course-slot"></div>

            <div className="time-column">12:00 - 1:00</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 2 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-orange">{selectedCourses[2].code}</div>
              )}
            {selectedCourses.length <= 3 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot dark-green">{selectedCourses[3].code}</div>
              )}

            <div className="time-column">1:00 - 2:00</div>
            {selectedCourses.length === 0 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-blue">★ {selectedCourses[0].code}</div>
              )}
            <div className="course-slot"></div>
            {selectedCourses.length <= 1 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-pink">★ {selectedCourses[1].code}</div>
              )}
            <div className="course-slot"></div>
            <div className="course-slot"></div>

            <div className="time-column">2:00 - 3:00</div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 2 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot light-orange">{selectedCourses[2].code}</div>
              )}
            <div className="course-slot"></div>
            {selectedCourses.length <= 4 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot red">{selectedCourses[4].code}</div>
              )}
            <div className="course-slot"></div>

            <div className="time-column">3:00 - 4:00</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 3 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot dark-green">{selectedCourses[3].code}</div>
              )}
            <div className="course-slot"></div>

            <div className="time-column">4:00 - 5:00</div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            <div className="course-slot"></div>
            {selectedCourses.length <= 4 ? (
                <div className="course-slot"></div>
              ) : (
                <div className="course-slot red">{selectedCourses[4].code}</div>
              )}
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
