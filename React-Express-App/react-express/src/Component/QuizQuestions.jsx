import React from "react";

export default function QuizQuestions(props) {
  console.log(props);
  return (
    <div>
      <h3 class="text-left">{props.question.question}</h3>
      {props.question.answers.map((ans) => {
        return (
          <div class="form-floating mb-4 mt-4">
            <input type="radio" name="ans" />
            {ans}
          </div>
        );
      })}
    </div>
  );
}
