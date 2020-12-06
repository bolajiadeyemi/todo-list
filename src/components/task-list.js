import React from 'react';

function TaskList(){
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
                    <li style={{
                       listStyle: 'none',
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                       border: '0.5px solid #4D4D4D',
                       padding: '0 20px'
                    }}>
                        <div style={{
                          
                        }}> 
                            <input type="checkbox" checked/>
                            <span
                            style={{
                                display: 'inline-block',
                                marginLeft: '20px'
                        
                            }}
                            >Task 1</span>
                        </div>
                        <div>
                            <p><a href='#'>Delete</a></p>
                        </div>
                    </li>
                    <li style={{
                       listStyle: 'none',
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                       border: '0.5px solid #4D4D4D',
                       padding: '0 20px'
                    }}>
                        <div style={{
                          
                        }}> 
                            <input type="checkbox" checked/>
                            <span
                            style={{
                                display: 'inline-block',
                                marginLeft: '20px'
                        
                            }}
                            ><del>Task 1</del></span>
                        </div>
                        <div>
                            <p><a href='#'>Delete</a></p>
                        </div>
                    </li>
                    <li style={{
                       listStyle: 'none',
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                       border: '0.5px solid #4D4D4D',
                       padding: '0 20px'
                    }}>
                        <div style={{
                          
                        }}> 
                            <input type="checkbox" checked/>
                            <span
                            style={{
                                display: 'inline-block',
                                marginLeft: '20px'
                        
                            }}
                            >Task 1</span>
                        </div>
                        <div>
                            <p><a href='#'>Delete</a></p>
                        </div>
                    </li>
                </ul>
            </div>
    )
}

export default TaskList;