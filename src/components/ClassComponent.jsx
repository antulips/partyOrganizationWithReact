import React, { Component } from 'react'

export default class ClassComponent extends Component {
    //TODO: averiguar cómo destructurar en una clase 
    render() {
        return (
            <li>{this.props.nombre} {this.props.estaEnLista ? "está" : "no está"} invitade a la fiesta.</li>
        )
    }
}