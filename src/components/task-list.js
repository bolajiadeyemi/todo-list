import React, { useEffect } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

function TaskList({ taskList }){
    console.log(taskList)
    return(
        
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 480px'
            }}>
                <ul
                style={{
                  
                    width: '100%',
                 }}
                >
                   {taskList.map(({ text, completed },index) => 
                   <li key={index} style={{
                       listStyle: 'none',
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                       border: '0.5px solid #4D4D4D',
                       padding: '0 20px'
                    }}>
                        <div style={{
                          
                        }}> 
                            <input type="checkbox" checked={completed}/>
                            <span
                            style={{
                                display: 'inline-block',
                                marginLeft: '20px'
                        
                            }}
                        >{text}</span>
                        </div>
                        <div>
                            <p><a href='#'>Delete</a></p>
                        </div>
                    </li>)}
                </ul>
            </div>
    )
}

//Assignment
// handle task checked property,
// user should be able to mark a task as done
// user should be able to delete task from their task list
// completed task should be striked

export default TaskList;