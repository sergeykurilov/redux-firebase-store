import React from 'react';
import Buttons from "../forms/Button";
import "./styles.scss"
import {singInWithGoogle} from "../../firebase/utils";

class SignIn extends React.Component {

    handleSubmit = async e => {
        e.preventDefault()
    }


    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>LogIn</h2>
                </div>


                <div className="formWrap">
                    <form onSubmit={this.handleSubmit}>
                        <div className="socialSignin">
                            <div className="row">
                                <Buttons onClick={singInWithGoogle}>
                                    Sign In with Google
                                </Buttons>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

};

export default SignIn;
