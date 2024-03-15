import * as React from 'react';
import './Square.css';


export default function Square({
        tema = {
            backgroundColor : "white"
        },
        children
}){

    return (
        <>
            <div className={"Square"}
                style={tema}
            >
                {children}
            </div>
        </>
    );
}