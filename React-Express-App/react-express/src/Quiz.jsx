import React from "react";
import { useEffect, useState } from "react";
import QuizQuestions from "./QuizQuestions";

function Quiz() {
  const [questions, setquestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/questions")
      .then((res) => res.json())
      .then((data) => {
        setquestions(data);
      });
  }, []);
  return (
    <div>
      <h1>QUIZ APP...🤫</h1>
      <h4>
        {questions.map((question) => {
          return <QuizQuestions question={question}></QuizQuestions>;
        })}
      </h4>
    </div>
  );
}

export default Quiz;
