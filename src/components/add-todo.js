import React, { useRef } from 'react';



function AddTodo({ onAddToTaskList }) {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        if(inputEl.current.value !== '') onAddToTaskList(inputEl.current.value) // newtask
        inputEl.current.value ='';
      };

    return (
        <div>
            <div style={{

            }}>
            <input ref={inputEl} type="text" placeholder="New Task" style={{
                width: '406px',
                height: '26px',
            }}/>

            <button type="button" style={{
                background:'#3379B7', 
                color: '#ffffff',
                border: 'none', 
                height: '28px', 
                marginLeft: '23px',
                }}
                
                onClick={onButtonClick}
                                >Add</button>
            </div>
        </div>
    )

}


export default AddTodo;