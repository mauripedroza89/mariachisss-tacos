import {Switch, Route} from 'react-router-dom';
import {Auth, Home, Dashboard} from '../views'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Auth}/>
        <Route exact path="/signup" component={Auth}/>
        <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
)

export default Router