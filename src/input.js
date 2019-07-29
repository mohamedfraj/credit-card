import React, { Component } from "react"

class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="inputs">
                <input className='input' type="text" onChange={(e) => this.props.changeNumber(e.target.value.slice(0,4)+" "+e.target.value.slice(4,8)+" "+e.target.value.slice(8,12)+" "+e.target.value.slice(12,16)+"")} placeholder="1234 1234 1234 1234" maxLength="16"></input>
                <input className='input' type="text" onChange={(e) => this.props.changeDate(e.target.value.slice(0,2)+'/'+e.target.value.slice(2,4))} placeholder="**/**" maxLength="4"></input>
                <input className='input' type="text" onChange={(e) => this.props.changeName(e.target.value.toUpperCase())} placeholder="name" maxLength='20'></input>
            </div>
        )
    }
}

export default Inputs;