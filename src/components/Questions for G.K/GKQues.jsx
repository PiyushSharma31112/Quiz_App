import React, { useEffect, useState } from 'react'
import GeneralKnowledge from "./GKdata"
import Result from '../Result/Result'

function GKQues() {
    const [data, setData] = useState(GeneralKnowledge)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(data[currentIndex])
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(10)
    const [selectedOption, setSelectedOption] = useState(true)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer === 0) {
                setCurrentIndex(prevIndex => prevIndex + 1)
                setCurrentQuestion(data[currentIndex + 1])
                setTimer(10)
                setSelectedOption('')
            } else {
                setTimer(prevTimer => prevTimer - 1)
            }
        }, 1000)

        return () => clearInterval(countdown)
    }, [timer, currentIndex, data])

    const handleOptionClick = () => {
        if (selectedOption === currentQuestion.correctAns) {
            setScore(score + 1)
        }

        if (currentIndex < 9) {
            setCurrentIndex(currentIndex + 1)
            setCurrentQuestion(data[currentIndex + 1])
            setTimer(10)
            setSelectedOption('')

        } else {
            console.log(score)
            setShowResult(true)
        }
    }

    const isSelected = (e) => {
        setSelectedOption(e.target.id)
    }

    if(showResult) {
        return ( 
            <div className="w-full max-w-md p-8 bg-white mt-[10%] rounded-lg shadow-lg"> 
                <h2 className='text-center text-xl font-semibold'>{score}/10</h2>
                {/* <div>
                    {data.map(({ question, correctAns, options }) => 
                        <div key={options} className='w-full'>
                            <h5>Q. {question}</h5>
                            <h5>Answer : {correctAns}</h5>
                        </div>
                    )}
                </div> */}
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
                <input type="radio" name="answer" id="a" className="radioBtn" onChange={isSelected} />
                <label htmlFor="a" id="optionA" >{currentQuestion.options.a}</label>
                <input type="radio" name="answer" id="b" className="radioBtn" onChange={isSelected} />
                <label htmlFor="b" id="optionB">{currentQuestion.options.b}</label>
                <input type="radio" name="answer" id="c" className="radioBtn" onChange={isSelected} />
                <label htmlFor="c" id="optionC">{currentQuestion.options.c}</label>
                <input type="radio" name="answer" id="d" className="radioBtn" onChange={isSelected} />
                <label htmlFor="d" id="optionD">{currentQuestion.options.d}</label>
            </div>

            <button
                className="w-full py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={handleOptionClick}>
                Next
            </button>

            {/* <div className={`text-center py-[100px] ${isOver ? 'block' : "hidden" } `}>
                <h2>You Scored : <span className=''> {score} </span>/10</h2>
                <button onClick={restart} className='px-[25px] py-[10px] bg-blue-500 text-white hover:bg-blue-700'>
                    restart
                </button>
            </div> */}

        </div>
    )
}

export default GKQues
