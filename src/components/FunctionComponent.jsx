import React from 'react'

const FunctionComponent = (props) => {
    const {nombre, tarea} = props;
    return (
        <li>{nombre} traerá {tarea}.</li>
    )
}

export default FunctionComponent