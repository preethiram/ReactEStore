import React, { Component } from 'react';

class PStoreApps extends Component {
 
    constructor(props) {
       super(props)
       this.state = {fullName: ""}
       this.createFullName();
    }

 createFullName= () => {
    const {name, gender} = this.props
  const fullName = `${name}+${gender}`
  this.setState({ fullName})
} 

render(){
    const {name, gender} = this.props
    const data = `Name: ${name}
    Gender ${this.props.gender}`
    return (<div>
        <h1>{data}</h1>
        <h1>FullName {this.state.fullName}</h1>
    </div>)
}   
}
export const PStoreApps1 = (props) =>
     <h1> " welcome to PStore1 {props.work}  exp {props.exp}" </h1> //named always start with capital


 export default PStoreApps;