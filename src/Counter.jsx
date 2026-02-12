import { useState } from "react";

function Counter(){
    const [num, setNum] = useState(0);
    function increment(){
        if (num < 0){
            setNum(0);
        }
        else{
            setNum(num + 1);
            console.log(num);
        }
    }
    function decrement(){        
        if (num <= 0){
            setNum(0);
        }
        else{
            setNum(num - 1);
            console.log(num);
        }
    }

    function reset(){
        setNum(0);
        console.log(num);
    }

    return(

        <div className ="container">
            <p> </p>
            <div className="display">
               <h1>{num}</h1>
            </div>
            <div className="btn">
                <button className="" id="increase" onClick={increment}>Increase</button>
                <button className="" id="decrease"onClick={decrement}>Decrease</button>
                <button className="" id="reset"onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;