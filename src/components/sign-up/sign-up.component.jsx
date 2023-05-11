import React from "react";
import './sign-up.style.css'
import InputForm from "../input-form/input-form.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpWithEmailAndPassword } from "../../firebase/firebase.utils";
class SignUp extends React.Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        // this.setState({displayName:'', email:'', password:'', confirmPassword:''})
    } 

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});

    }

    handleSubmitButton = () =>{
        const {password, confirmPassword, email, displayName} = this.state;
        if(password !== confirmPassword){
            alert('Password is not equal')
            return;
        }
        else if(password.length < 8){
            alert('Please enter equal or more than 8 charachtars');
            return;
        }
        SignUpWithEmailAndPassword(email,password, displayName);
        
    }

    render(){

        return(
            <div className="sign-up">
               <h2>I do not have a account</h2> 
               <span>Sign up wtih your email and password</span>
               <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <InputForm name='displayName' type="text" value={this.state.displayName} onChange={this.handleChange} />
                    <InputForm name='email' type="email" value={this.state.email} onChange={this.handleChange} />
                    <InputForm name='password' type="password" value={this.state.password} onChange={this.handleChange} />
                    <InputForm name='confirmPassword' type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
                    <div className="button-group">
                    <CustomButton type="submit" onClick={this.handleSubmitButton}>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;