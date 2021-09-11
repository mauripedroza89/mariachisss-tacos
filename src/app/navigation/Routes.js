import {Switch, Route} from 'react-router-dom';
import {Auth, Home, Dashboard} from '../views';
import {ProductCreated,CreateExtra,CreateFood,CreateDrink, OrderGrid } from '../components';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Auth}/>
        <Route exact path="/signup" component={Auth}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/addfood" component={CreateFood}/>
        <Route exact path="/addextra" component={CreateExtra}/>
        <Route exact path="/adddrink" component={CreateDrink}/>
        <Route exact path="/productcreated" component={ProductCreated}/>
        <Route exact path="/orderrecord" component={OrderGrid}/>
    </Switch>
)

export default Router