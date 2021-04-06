import React, { Component } from 'react'
import { Button } from '@material-ui/core'


export default class ClassEffectCounter extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0,
            name:''
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }   
    }

    render() {
        return (
            <div>
            <input 
                type='text'
                value={this.state.name}
                onChange={e=> {
                    this.setState({name: e.target.value})
                }}
             /><span> </span>
             <Button variant="contained"  
                onClick={()=>this.setState({count: this.state.count + 1})}>
                Class aCount: {this.state.count}
             </Button> 
             <br/><br/>  
            </div>
        )
    }
}


