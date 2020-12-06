import { render } from '@testing-library/react'
import React from 'react'

function Nav(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '20px',
            backgroundColor: '#4D4D4D',
        }}>
            <h2>Todo Do List</h2>
        </div>
    );
};

export default Nav;

