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
      <h2 class="text-center">QUIZ 🤫(Play to get rewarded)...🤫</h2>
      <br />
      <br />
      <h4>
        {questions.map((question) => {
          return <QuizQuestions question={question}></QuizQuestions>;
        })}
      </h4>
    </div>
  );
}

export default Quiz;
