import React from 'react'

function Result({ score, question }) {

  return (
    <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center'>
        <h2 className='text-2xl font-semibold mb-4'>
            Your Score: {score}/{question.length}
        </h2>

        <h3 className='text-xl mb-4'>
            Correct Answer:
        </h3>

        <ul className='list-disc list-inside text-left'> 
          {
              question.map((q, index) => (
                <li key={index} className='mb-2' >
                    <strong>Q: {q.question}</strong> <br />
                    A: {q.answer}
                </li>
              ))
          }
        </ul>

        <button 
          onClick={() => window.location.reload()}
          className='mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700'>
            Restart Quiz
        </button>
    </div>
  )
}

export default Result
