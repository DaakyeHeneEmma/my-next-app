import { useState, useEffect} from 'react'

const Func1 = ({name, value})=> {
    return(
       <div>
       <p>Name: {name} </p>
       <p>Value: {value} </p>
       </div>
    )
}

function Timer() {
    const [time,setTimer] = useState(0)
 
   useEffect(()=>{
        setInterval( ()=>{
            setTimer(timer=> timer + 0.5)
        },2000)
   },[])
     
    return (
        <div>
        <p>time here</p>
        {time}
        <Func1 name="angala" value="4.5" />
        </div>
    )
}

export default Timer
