import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

const Router = ( props ) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/home" component={ Home } />


            </Switch>
        </BrowserRouter>
    )
};

export default Router;