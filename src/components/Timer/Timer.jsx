import React, { useEffect, useState } from 'react'

  const Timer = ({ setTimeOver }) => {
    
    const [time, setTime] = useState(10)
    
    useEffect(() => {
        if (time === 0) {
          setTimeOver(true)
          return;
        }

        const timerId = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return clearInterval(timerId)

    }, [time, setTimeOver]);
    
    return (

      <div className='text-right text-gray-600'>
          Time left : <span className='text-red-500'> {time}</span>s
      </div>
    )
}

export default Timer
