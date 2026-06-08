import React from "react";

function StudentList({ students, onDelete }) {
  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          {student}
          <button
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(StudentList);