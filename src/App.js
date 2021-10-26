import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";

function App() {
  const user = useSelector(selectUser);
  const classes = userStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <Router>
    <div className={classes.root}>
        <Switch>
        <Route path="/login" >
            <Login />
        </Route>
        <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/checkout">
            <Paypal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

const userStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100%",
  },
}))
export default App;
