import React from "react";
import PropTypes from "prop-types";

const Course = ({name}) => <div className="st-course-card">{name}</div>;

const StudentCard = ({student}) => {
  return (
    <div className="student-card">
      <div className="st-name">{student.name}</div>
      <div className="st-id">ID: {student.id}</div>
      <div className="st-courses">
        {student.courses.map((c, i) => (
          <Course name={c} key={i} />
        ))}
      </div>
      <div className={student.active ? "st-active on" : "st-active"} />
    </div>
  );
};

StudentCard.defaultProps = {
  active: false
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    active: PropTypes.bool,
    courses: PropTypes.array.isRequired
  })
};

export default StudentCard;
