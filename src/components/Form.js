/*import React from 'react'
import './Form.css';

function Form(){
    return (
        <div className="Form">
            <form action="" method="POST">
            <div className="FirstForm">
                <h2>First Player</h2>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" name="firstname" required />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" name="lastname" required />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" name="emailAddress" required />
            </div>
            <div className="SecondForm">
            <h2>Second Player</h2>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" name="sfirstname" required />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" name="slastname" required />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" name="semailAddress" required />
                    <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        
    );
}

export default Form*/

import React,{ Component} from 'react'
import './Form.css';
import Game from './Game'
import { withRouter } from 'react-router';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  
  class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            emailAddress: '',
            sfirstname : '',
            slastname : '',

          };

      }

      submitform=(event)=>{
          /*var del=document.getElementById("Form")
          del.parentNode.removeChild(del)
          document.getElementById("tic").style.visibility="visible"*/
          console.log(this.state)
          this.props.history.push({pathname:"/game",
          state:this.state});
      }
    
      changeFirstName = (event)=> {    this.setState({firstname: event.target.value});  }
      changeLastName= (event)=> {    this.setState({lastname: event.target.value});  }
      changeEmail= (event)=> {    this.setState({emailAddress: event.target.value});  }
      changesFirstName= (event)=> {    this.setState({sfirstname: event.target.value});  }
      changesLastName= (event)=> {    this.setState({slastname: event.target.value});  }
      changesEmail= (event)=> {    this.setState({semailAddress: event.target.value});  }
      
    render(){
        return (
            <div id="parent">
                <div className="Form" id="Form">
                <div className="FirstForm">
                <h2>First Player</h2>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" value={this.state.firstname} name="firstname" onChange={this.changeFirstName} required />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" value={this.state.lastname} name="lastname" onChange={this.changeLastName} required />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" value={this.state.emailAddress} name="emailAddress" onChange={this.changeEmail} required />
            </div>
            <div className="SecondForm">
            <h2>Second Player</h2>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" value={this.state.sfirstname} name="sfirstname" onChange={this.changesFirstName} required />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" value={this.state.slastname} name="slastname" onChange={this.changesLastName} required />
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email Address" value={this.state.semailAddress} name="semailAddress" onChange={this.changesEmail}  required />
                    <button type="submit" onClick={this.submitform} >Submit</button>
            </div>
        </div>
        
            </div>
       )
    }
}

export default withRouter(Form);