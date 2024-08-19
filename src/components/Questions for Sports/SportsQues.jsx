import React, { useState, useEffect } from 'react'
import sports from "./SportsData"
import { NavLink } from "react-router-dom"

function SportsQues() {
  const [data, setData] = useState(sports)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(data[currentIndex])
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(10)
  const [selectedOption, setSelectedOption] = useState('')
  const [isOptionDisabled, setIsOptionDisabled] = useState(false)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer === 0) {
        handleNextQuestion()
      } else {
        setTimer(prevTimer => prevTimer - 1)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [timer])

  useEffect(() => {
    setCurrentQuestion(data[currentIndex])
    setSelectedOption('')  // Reset selected option on question change
    setIsOptionDisabled(false) // Re-enable options for the new question
  }, [currentIndex, data])

  const handleOptionClick = (e) => {
    const selectedValue = e.target.value
    setSelectedOption(selectedValue)
    setIsOptionDisabled(true)  // Disable options after selection

    if (selectedValue === currentQuestion.correctAns) {
      setScore(score + 1)
    }

    // Move to the next question after a short delay (e.g., 1 second)
    setTimeout(() => {
      handleNextQuestion()
    }, 500)
  }

  const handleNextQuestion = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setTimer(10)
    } else {
      setShowResult(true)
    }
  }

  if (showResult) {
    return (
      <div className="w-full max-w-md p-8 bg-white mt-[10%] rounded-lg shadow-lg">
        <h2 className='text-center text-xl font-semibold mb-5'>You Scored: {score}/10</h2>
        <div className='flex justify-between flex-col items-center gap-10'>
          {data.map(({ question, answer, options }, index) =>
            <div key={index} className='w-full'>
              <h5>Q. {question}</h5>
              <h5>Answer : {answer}</h5>
            </div>
          )}
          <NavLink to='/Questions' className="w-full py-2 mb-2 text-white bg-blue-500 rounded text-center hover:bg-blue-700">
            Back to Questions Page
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md p-8 bg-white mt-[10%] rounded-lg shadow-lg">
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-bold p-2'> Question: {currentIndex + 1}/10</h1>
        <div>
          Time left : <span className='text-red-500'> {timer}</span>s
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold mb-4">Q. {currentQuestion.question}</h2>
      </div>

      <div className="options">
        <input
          type="radio"
          name="answer"
          id="a"
          value="a"
          checked={selectedOption === "a"}
          className="radioBtn"
          onChange={handleOptionClick}
          disabled={isOptionDisabled}  // Disable option after selection
        />
        <label htmlFor="a">{currentQuestion.option.a}</label>

        <input
          type="radio"
          name="answer"
          id="b"
          value="b"
          checked={selectedOption === "b"}
          className="radioBtn"
          onChange={handleOptionClick}
          disabled={isOptionDisabled}  // Disable option after selection
        />
        <label htmlFor="b">{currentQuestion.option.b}</label>

        <input
          type="radio"
          name="answer"
          id="c"
          value="c"
          checked={selectedOption === "c"}
          className="radioBtn"
          onChange={handleOptionClick}
          disabled={isOptionDisabled}  // Disable option after selection
        />
        <label htmlFor="c">{currentQuestion.option.c}</label>

        <input
          type="radio"
          name="answer"
          id="d"
          value="d"
          checked={selectedOption === "d"}
          className="radioBtn"
          onChange={handleOptionClick}
          disabled={isOptionDisabled}  // Disable option after selection
        />
        <label htmlFor="d">{currentQuestion.option.d}</label>
      </div>

      <button
        className="w-full py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleNextQuestion}
      >
        Next
      </button>

    </div>
  )
}

export default SportsQues
