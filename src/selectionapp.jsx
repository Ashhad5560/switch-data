import react from 'react';
import { useState } from 'react';
import './selectionapp.css'



function Selectionapp() {

    const [counter, setCounter] = useState(1)


    const [advices, setAdvices] = useState([
        "Learn React",
        "Now Have Handsome Income",
        "Invest your New Income", 
        'Make Money',
        'Learn Web Development'
    ])



    function backHandler() {
        if (counter > 0) {
            console.log("running BH");
            setCounter(counter - 1)
        }
    }


    function nextHandler() {
        if (counter < 5) {
            console.log("running NH");
            setCounter(counter + 1)
        }
    }



    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                {
                    Array.from([1, 2, 3, 4, 5], container => (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', backgroundColor: counter >= container ? "purple" : "green", "purple": "gray", borderRadius: '50%', textAlign: 'center', color: 'white' }}>{container}</div>
                    ))
                }
            </div >

            <p style={{ textAlign: 'center', color: 'white' }}>
                {

                advices[counter - 1]
                }
            </p>

            <div  style={{ display: 'flex', justifyContent: 'space-around'  }}>
                {
                    Array.from(["back", "next"], btn => (
                        <button className = 'button' onClick={btn == "back" ? backHandler : nextHandler}>{btn}</button>
                    ))
                }
            </div>

        </>
    )



}




export default Selectionapp;


// display: 'flex', justifyContent: 'space-around', marginTop: '100px'


// div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', backgroundColor: counter > container  ? "purple" : "gray", borderRadius: '50%', textAlign: 'center', color: 'white',