import React, {useState} from "react";
function Counter(){
 const [count, setCount] = useState(0)
 const addTask = () => {
    setCount(count + 1)
 }
 const reduceTask = () => {
    setCount(count - 1)
 }
 const resetTask = () => {
    setCount(0);
 }
 return(
    <div>
        <p>Counter: {count}</p>
        <button onClick={addTask}>add</button>
        <button onClick={reduceTask}>reduce</button>
        <button onClick={resetTask}>reset</button>
    </div>
 )
}
export default Counter