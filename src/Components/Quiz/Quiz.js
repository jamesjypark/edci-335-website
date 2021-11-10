import React, { useState } from 'react'

import './Quiz.scss'


function Question(question) {
  const { options, description, answer } = question;

  const [isCorrect, setIsCorrect] = useState(false);
  const [resultValue, setResultValue] = useState(false);

  const handleButtonClick = (e) => {
    if (e.target.value === answer) {
      setResultValue(`Correct! You've got the answer 🎉`);
      setIsCorrect(true);
    } else {
      setResultValue(`Oops, your answer is incorrect. Try again!`)
      setIsCorrect(false);
    }
  }

  return (
    <div>
      <div className="basetext2 bold left">{description}</div>
      <div className="button-container">
        {options.map(option => {
          return (
            <div className="left">
              <button
                className = "button"
                onClick = {handleButtonClick}
                value = {option}
              >
                {option}
              </button>
            </div>
          )
        })
        }
      </div>
      <div className={`basetext2 medium ${isCorrect ? 'green' : 'red' }${resultValue ? '' : 'hide'}` } >{resultValue}</div>
    </div>
  )
}

export default function Quiz(props) {
  const { questions } = props;
  console.log(questions);
  return(
    <div>
      {questions.map(question => 
        <Question {...question} />
      )}
    </div>
  )
}