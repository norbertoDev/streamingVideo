import { makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import {auth} from '../firebase';

const SingUp = () => {
    const classes = userStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sigIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
        .then((authUser) => console.log(authUser))
      .catch((err)=>alert(err.message))

    }


    const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => console.log(authUser))
      .catch((err)=>alert(err.message))
    }

    return (
      <div className={classes.root}>
            <Typography variant='h5' align='left'>
              Sign In
            </Typography>
            <form className={classes.form}>
              <NetflixInput 
              value={email} 
              onChange={(e) =>setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className={classes.email}/>
              <NetflixInput 
              value={password} 
              onChange={(e) =>setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className={classes.password}/>
              <NetflixButton
              onClick={sigIn}
              type="submit" 
              wide ='medium' 
              radius ='true'>
              Sign In
              </NetflixButton>
              <Typography variant='subtitle2'>
                New to Netflix ? {"  "}
                <span 
                  className={classes.singupLink} 
                  onClick={register}>
                  Sign Up now.{" "}
                </span>
              </Typography>
            </form>
      </div> 
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      maxWidth: "350px",
      width: "20rem",
      height: "25rem",
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    form: {
      width: "80%",
      alignItems: "center"
    },
    email: {
      marginBottom: theme.spacing(2),
    },
    password: {
      marginBottom: theme.spacing(4),
    },
    singupLink: {
      color: "#fff",
      cursor: "pointer",
      "&:hover":{
        textDecoration: "underline"
      }
    }
  }));

export default SingUp
