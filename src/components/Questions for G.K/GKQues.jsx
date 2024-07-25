import React, { useEffect, useState } from 'react'
import GeneralKnowledge from "./GKdata"
// import { Timer, Result } from "../index"

function GKQues() {
    let index = 0

    // useStates 

    const [data, setData] = useState(GeneralKnowledge)
    const [currnetIndex, setCurrentIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(data[currnetIndex])
    const [score, setScore] = useState(0)
    const [correctOption, setCorrectOption] = useState('')
    const [timer, setTimer] = useState(10)
    const [isChecked, setIsChecked] = useState(false)
    const [selectedOption, setSelectedOption] = useState()


         // Functions
        
        
         const isSelected = (e) => {
            let id = e.target.id
            setIsChecked(true)
            correctOption == id ? setScore(prev => prev + 1) : null
        }
        
        function next () {
            setCurrentIndex(prev => prev + 1)
        }

        function handleOptionClick(option) {
                next()
                setCorrectOption(option)
                clearInterval(timer); //Stop the timer when option is selected
        };

        function handleNextQuestion () {
            setCurrentQuestion((prev) => (prev<data[currnetIndex].question.length-1 ? prev + 1 : prev));
            setSelectedOption(null)
            setTimer(10) // Reset For the next Question
        };

        // useEffects

        useEffect(() => {
            setCurrentQuestion(data[currnetIndex])
        }, [currnetIndex])

        useEffect(() => {
            const interval = setInterval(() => {
                setTimer((prev) => (prev > 0 ? prev - 1 : 0))
            }, 1000);

            if (timer === 0) {
                handleNextQuestion()
            }

            return () => clearInterval(interval)
        }, [timer]);

       

  return (
    <div className="w-full max-w-md p-8 bg-white mt-[10%] rounded-lg shadow-lg">
        
        <div className=' w-full flex items-center justify-between'>
            <h1 className='text-2xl font-bold p-2 '> Question: {currnetIndex + 1}/10</h1>
            <div>
                    Time left : <span className='text-red-500'> {timer}</span>s
                </div>
        </div>

            <div className='flex justify-between items-center'>
                <h2 className="text-xl font-semibold mb-4">Q. {currentQuestion.question}  </h2>
                
            </div>

        <div className="options">
			<input type="radio" name="answer" id="a" className="radioBtn" onChange={isSelected}/>
			<label htmlFor="a" id="optionA">{currentQuestion.options.a}</label>
			<input type="radio" name="answer" id="b" className="radioBtn" onChange={isSelected}/>
			<label htmlFor="b" id="optionB">{currentQuestion.options.b}</label>
			<input type="radio" name="answer" id="c" className="radioBtn" onChange={isSelected}/>
			<label htmlFor="c" id="optionC">{currentQuestion.options.c}</label>
			<input type="radio" name="answer" id="d" className="radioBtn" onChange={isSelected}/>
			<label htmlFor="d" id="optionD">{currentQuestion.options.d}</label>
		</div>



        <button 
            className="w-full py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleOptionClick}>
            next
        </button>


    </div>
  )
}

export default GKQues
