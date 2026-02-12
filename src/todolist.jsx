import { useState } from "react";
import icon from "./assets/delete.png"
    function Todolist(){
    
        const [input, setInput] = useState("");
        const [lists, setLists] = useState(["go to Dubai", "going to Paris","a moking bird"]);
        function inputChange(event){
            setInput(event.target.value);
        };
    function addToList(e){
        e.preventDefault();
        setLists(l => [...l, input])
        setInput("");
        //console.log(lists)
    };

    function removeList(index){
        const updateTasks = lists.filter((element,i) => i !== index);
        console.log(updateTasks);
        console.log(index);
        setLists(updateTasks)
    };

    return(
        <div className="container">
            <div className="addTitle">
                <h1>To Do List</h1>
                <form action="">
                    <input type="text" id="input" placeholder="Add something here" value={input} onChange={inputChange} />
                    <button className="add-btn" id="add-btn" type="submit" onClick={addToList}>ADD</button>
                </form>
            </div>
            <div className="listContainer" id="listContainer">
                <ol>
                    {lists.map((list,index)=>
                    <li key={index}>
                        <span className="lists">{list}<button className="removeSymbol" onClick = {() =>removeList(index)}><img className="delete-icon removeSymbol" src={icon} alt="delete"/></button>
                        </span>
                    </li>)}
                </ol>   
            </div>
        </div>


    );
};
export default Todolist;