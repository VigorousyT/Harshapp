import React from "react";
import Notification from "./components/Notification"; // Requires messages: Array
import NumberedButtons from "./components/NumberedButtons"; // Requires num: Number
import StudentCard from "./components/StudentCard"; // Requires student: Shape

const App = () => {
  return (
    <div className="main">
      <Notification
        messages={["Please renew your account", "You have 2 notifications"]}
      />
      <NumberedButtons num={5} />
      <StudentCard
        student={{
          name: "Richie Samson",
          id: 1209,
          active: true,
          courses: [
            "Deep Learning Fundamentals - 2019",
            "Python - Intermediate"
          ]
        }}
      />
    </div>
  );
};

export default App;
