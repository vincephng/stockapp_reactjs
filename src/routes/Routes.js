import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import  Mainpage  from '../pages/home';
import stocksPage  from '../pages/stocksPage'
import CoinList from '../component/CoinList'
import history from './history'



const Routes = () => {
    return (
            <Router history={history}>
              <Switch>
                <Route path = "/" exact component={Mainpage}/> 
                <Route path = "/stock/:id" component={stocksPage}/>
                {/* <Route path = "/name" component={NameProgess}/> */}
                <Route path = "/coin/home" component={CoinList}/>
              </Switch>
            </Router>
    
  );
}
export default Routes;
