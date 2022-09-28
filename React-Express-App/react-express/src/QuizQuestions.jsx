import React from "react";

export default function QuizQuestions(props) {
  console.log(props);
  return (
    <div>
      <h4>{props.question.question}</h4>
      {props.question.answers.map((ans) => {
        return (
          <>
            <input type="radio" name="ans" />:{ans}
          </>
        );
      })}
    </div>
  );
}
