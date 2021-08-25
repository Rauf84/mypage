import React from 'react'
import './myfirstcomponent.css'


export const MyFirstComponent = (props) => {
    return (
        <>
            <h1 className="title">
                {props.name}
                {props.age}
            </h1>
        </>
    )
}