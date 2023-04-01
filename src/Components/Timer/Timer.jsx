import React from 'react';
import './Timer.css';

const Timer = ({timer}) => {
    // console.log(props.timer)

    let timeValue = 0;
    for(const value of timer){
        timeValue = timeValue + parseInt(value.Read_time);
    }
    
    return (
        <>
           <p>Spent time on read : {timeValue} min</p> 
        </>
    );
};

export default Timer;