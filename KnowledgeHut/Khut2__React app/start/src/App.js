import React from "react";
import Notification from "./components/Notification"; // Requires messages: Array
import NumberedButtons from "./components/NumberedButtons"; // Requires num: Number
import StudentCard from "./components/StudentCard"; // Requires student: Shape

const App = () => {
  return (
    <div className="main">
      <StudentCard
        student={{
          name: "Richie Samson",
          email: "richie@gmail.in",
          id: 1209,
          active: true,
          courses: ["Python - Intermediate"]
        }}
      />
    </div>
  );
};

export default App;
