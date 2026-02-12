import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function KanbanBoard(){

    const initialData = {  

        todo:[
            {id:crypto.randomUUID(), title: "learn react"},
            {id:crypto.randomUUID(), title: "todo"}
        ],
        inprogress: [
            {id:crypto.randomUUID(), title: "learning front end"},
            {id:crypto.randomUUID(), title: "inprogress"}
        ],
        done: [
            {id:crypto.randomUUID(), title: "hello"},
            {id:crypto.randomUUID(), title: "done"}
        ]
    };
    const [columns, setColumns] = useState(initialData);
    const [inputValue, setInputValue] = useState("");

    const sectionValue = document.getElementById("section");

    function handleSection(){
        if (!inputValue.trim()) return;

        if(sectionValue.value === "todo"){
            handleToDo();
        };
        if(sectionValue.value === "inprogress"){
            handleInprogress();
        };
        if(sectionValue.value === "done"){
            handleDone();
        };
    };

    function deleteTask(columnKey,id){
        setColumns(prev => ({
            ...prev, [columnKey]: prev[columnKey].filter(item => item.id !== id)})); 
    }

    function handleMove(fromColumn, toColumn, id){
        //console.log(columns.todo[0].title);
        //console.log(columns[fromColumn][0].title);
        //const task = columns[fromColumn].find(item => item.id !== id);
        //console.log(task)
        setColumns(prev => {
            const task = prev[fromColumn].find(item => item.id === id);
            if (!task) return prev;
            return{...prev, [fromColumn]: prev[fromColumn].filter(item => item.id !== id),
                            [toColumn]: [...prev[toColumn], task]
            };
        });

    };

    function handleToDo(){
        const newTodo = {
            id: crypto.randomUUID(),
            title:inputValue
        };

        setColumns(prev => ({
            ...prev, todo: [...prev.todo, newTodo]}));

        setInputValue("");
                
    };


    function handleInprogress(){
        const newInprogress = {
            id: crypto.randomUUID(),
            title: inputValue
        };

        setColumns(prev => ({ ...prev, inprogress: [...prev.inprogress, newInprogress]}));
        setInputValue("");
    };

    function handleDone(){
        const newDone = {
            id: crypto.randomUUID(),
            title: inputValue
        }
        setColumns(prev => ({...prev, done: [...prev.done, newDone]}));
        setInputValue("");
    };

    return(
        <div className="main-div">
            <h1 className="project-heading">Kanban Board</h1>
            <div className="container">
                <div className="task-adding">
                    <input type="text" className="input-values text-input" placeholder="add tasks here" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <select name="options" id="section" className="input-values option-input">
                        <option value="todo">To do</option>
                        <option value="inprogress">Inprogress</option>
                        <option value="done">Done</option>
                    </select>
                    <button className="add-btn input-values" onClick={handleSection} >Add</button>
                </div>
                <div className="cards">
                    <div className="states todo">
                        <h3 className="class-heading todo-heading">To do</h3>
                        <div className=" list-container">
                            {columns.todo.map(item =>(
                                <div key={item.id} className="lists todo-item">
                                    <span className="list-paragraph">{item.title}</span>
                                    <span className="clickebles">
                                        <button className="arrow" onClick={() => handleMove("todo", "inprogress", item.id)}><FaArrowRight /></button>
                                        <button className="delete-button" onClick={() => deleteTask("todo", item.id)}><RiDeleteBin6Line /></button >
                                    </span>
                                </div>
                            ) )}
                        </div>
                    </div>
                    <div className="states inprogress">
                        <h3 className="class-heading inprogress-heading">Inprogress</h3>
                        <div className="list-container">
                            {columns.inprogress.map(item =>(
                                <div key={item.id} className=" lists inprogress-item">
                                    <span className="list-paragraph">{item.title}</span><span className="clickebles">
                                        <button className="arrow" onClick={() => handleMove("inprogress", "todo", item.id)}><FaArrowLeft /></button>
                                        <button className="arrow" onClick={() => handleMove("inprogress", "done", item.id)}><FaArrowRight /></button>
                                        <button className="delete-button" onClick={() => deleteTask("inprogress",item.id)}><RiDeleteBin6Line /></button>
                                    </span>
                                </div>
                            ) )}
                        </div>
                    </div>
                    <div className="states done">
                        <h3 className="class-heading done-heading">Done</h3>
                        <div className="list-container">
                            {columns.done.map(item => (
                                <div key={item.id} className="lists done-item">
                                    <span>{item.title}</span>
                                    <span className="clickebles">
                                        <button className="arrow" onClick={() => handleMove("done", "inprogress", item.id)}><FaArrowLeft /></button>
                                        <button className="delete-button" onClick={() => deleteTask("done", item.id)}><RiDeleteBin6Line /></button>
                                    </span>
                                </div>
                               
                            ))}
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    );
};

export default KanbanBoard;