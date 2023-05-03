import React from "react";
import './sign-in.style.css'

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            password:'',
            email:''
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span> Sign in wtih your email and password</span>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name='email' type="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>Password</label>
                    <input name='password' type="password" value={this.state.password} onChange={this.handleChange} required/>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}
 
export default SignIn;