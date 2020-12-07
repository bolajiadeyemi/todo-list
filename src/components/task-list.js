import React, { useEffect } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

function TaskList({ taskList , onDeleteTask, onTaskCompleted }){
    //console.log(taskList)

    const taskTitle = (text, completed) =>{
        // console.log('Test to change')
        // let newText = completed === true ? '<del>'+text+'</del>' : text ;
        // return newText;
    }

    const onDeleteClicked = (index)=>{
        onDeleteTask (index)
    }

    const onTaskCompletedClicked = (index)=>{
        onTaskCompleted(index)
    }

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
                   {taskList.map(({ text, completed }, index) => 
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
                            <input type="checkbox" checked={completed} onChange={()=>onTaskCompletedClicked(index,completed)} />
                            <span
                            style={{
                                display: 'inline-block',
                                marginLeft: '20px'
                        
                            }}>
                                {completed === true ? 
                                    <del>{text}</del> :
                                    text   
                                }    
                            </span>
                        </div>
                        <div>
                            <p><a href='#' onClick={()=>onDeleteClicked(index)}>Delete</a></p>
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