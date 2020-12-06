import React from 'react';



function AddTodo() {

    return (
        <div>
            <div style={{

            }}>
            <input type="text" placeholder="New Task" style={{
                width: '406px',
                height: '26px',
            }}/>
            <button type="button" style={{background:'#3379B7', color: '#ffffff', border: 'none', height: '28px', marginLeft: '23px',}}>Add</button>
            </div>
        </div>
    )
}


export default AddTodo;