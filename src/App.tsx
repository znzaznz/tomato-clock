import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Index from './view/Index/Index';
import Login from './view/Login/Login';
import SignUp from './view/SignUp/SignUp';
import './App.less';

class App extends React.Component{
    render() {
        return (
            <Switch>
                <Route path={"/signup"}>
                    <SignUp/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>
                <Route path={"/"} exact>
                    <Index/>
                </Route>
                <Route path={"/*"}>
                    Nothing
                </Route>
            </Switch>
        );
    }
}

export default App;
