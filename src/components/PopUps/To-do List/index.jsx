import React, { useState } from "react";

import "./styles.css";

export const TodoList = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ task, setTask ] = useState("");
    const [ pomodoroCount, setPomodoroCount ] = useState(0);
    const [ estimatedTime, setEstimatedTime ] = useState("3h");

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.slice();

        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-popup">
            <div className="todo-header">
                <h2>Tasks</h2>
                {/* <div className="header-buttons">
          <button className="btn">Add Desc.</button>
          <button className="btn">Add to Folder</button>
          <button className="btn">Save</button>
          <button className="btn cancel">Cancel</button>
        </div> */}
            </div>
            <div className="todo-content">
                <input
                    type="text"
                    value={ task }
                    onChange={ (e) => setTask(e.target.value) }
                    placeholder="What is your awesome task?"
                />
                <button onClick={addTask}>Add Task</button>
                {/* <div className="pomodoro-info">
          <p>Pom. Count: {pomodoroCount}/12</p>
          <p>You'll finish by: {estimatedTime}</p>
        </div> */}
                <ul className="task-list">
                    {
                        tasks.map((t, index) => (
                            <li
                                key={ index }
                                className={ `task-item ${
                                    t.completed ? "completed" : ""
                                }` }
                            >
                                <input
                                    type="checkbox"
                                    checked={ t.completed }
                                    onChange={ () => {
                                            const newTasks = [...tasks];

                                            newTasks[index].completed = !newTasks[index].completed;
                                            setTasks(newTasks);
                                        }
                                    }
                                />
                                <span>{ t.text }</span>
                                <button
                                    className="delete-btn"
                                    onClick={ () => deleteTask(index) }
                                >
                                    ❌
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};