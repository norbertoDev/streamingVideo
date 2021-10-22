import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";

function App() {
  const user = null;
  const classes = userStyles();
  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Switch>
              <Route path='/profile'>
               <Profile/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
          )
        }
      </Router>

    </div>
  );
}

const userStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: "#111",
    minHeight: "100%",
  }, 
}))
export default App;
