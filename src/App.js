import React from 'react';
import {Route, Switch} from "react-router-dom";

//styles
import "./default.scss"

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import {MainLayout} from "./layouts/MainLayout";

//layouts
import {HomepageLayout} from "./layouts/HomepageLayout";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => {
                   return <HomepageLayout>
                        <Homepage/>
                    </HomepageLayout>
                }}/>
                <Route path="/registration" render={() => {
                    return <MainLayout>
                        <Registration/>
                    </MainLayout>
                }}/>
            </Switch>
        </div>
    );
}

export default App;
