import React from "react";
import './sign-in.style.css'
import InputForm from "../input-form/input-form.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle , SignInWithEmailAndPassword} from "../../firebase/firebase.utils";


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

    handleSubmitButton = () =>{
        const {password, email} = this.state;
        SignInWithEmailAndPassword(email,password);
        
    }

    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span> Sign in wtih your email and password</span>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <InputForm name='email' type="email" value={this.state.email} onChange={this.handleChange} />
                    <InputForm name='password' type="password" value={this.state.password} onChange={this.handleChange} />
                    <div className="button-group">
                    <CustomButton type="submit" onClick={this.handleSubmitButton}>Sign In</CustomButton>
                    <CustomButton isGoogleAuth={true} onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default SignIn;