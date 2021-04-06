import React, { Component } from 'react'

export default class ClassMouseEffect extends Component {
    constructor(props){
        super(props)
        this.state = {
            x:0,
            y:0
        }
    }
    logMousePosition = e => {
        this.setState({x:e.clientX, y:e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mouseover', this.logMousePosition)
    }
    //the same  clean up effect in a class component
    componentWillUnmount(){
        window.removeEventListener('mouseover', this.logMousePosition)
    }
    render() {
        return (
            <div>
                X -{this.state.x}  Y - {this.state.y}
            </div>
        )
    }
}
