import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

//styles
import "./default.scss"

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import {MainLayout} from "./layouts/MainLayout";

//layouts
import {HomepageLayout} from "./layouts/HomepageLayout";
import Login from "./pages/Login";
import {auth} from "./firebase/utils";


const initalState = {
    currentUser: null
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initalState
        }
    }

    authListener = null;

    componentDidMount() {
        this.authListener = auth.onAuthStateChanged(userAuth => {
            if (!userAuth) {
                this.setState({
                    ...initalState
                })
            }
            ;
            this.setState({
                currentUser: userAuth
            })
        })
    }

    componentWillUnmount() {
        this.authListener();
    }


    render() {

        const {currentUser} = this.state;

        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={() => {
                        return <HomepageLayout currentUser={currentUser}>
                            <Homepage/>
                        </HomepageLayout>
                    }}/>
                    <Route path="/registration" render={() => {
                        return <MainLayout currentUser={currentUser}>
                            <Registration/>
                        </MainLayout>
                    }}/>
                    <Route path="/login" render={() => currentUser ? <Redirect to="/"/>
                        : (<MainLayout currentUser={currentUser}>
                                <Login/>
                            </MainLayout>
                        )}/>
                </Switch>
            </div>
        );
    }
}

export default App;
