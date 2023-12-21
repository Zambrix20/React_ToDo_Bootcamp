import React from 'react'

export default function Button(props) {

    const { text, className } = props

    return (
        <button className={className} onClick={props.onClick}>
            {/* {text} */}
            {props.children}
        </button>
    )
}
