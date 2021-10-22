import { Button, makeStyles, Typography } from '@material-ui/core'
import logo from "../images/logoNet.png";
import HeroBanner from "../images/HelloBanner.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useState } from 'react';
import SingUp from './SingUp';

const Login = () => {
    const classes = userStyles();
    const [signIn, setSignIn] = useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt='logo'/>
            <NetflixButton className= {classes.sesion}>Iniciar sesion </NetflixButton>
            <div className={classes.info}>
              {
                !signIn ? (<SingUp/>) : (
              <>        
              <Typography variant='h4' gutterBottom>
                Unlimited films, TV shows and more. 
              </Typography>
              <Typography variante='h5'>
                Watch anywhere. Cancel at any time.
              </Typography>
              <Typography variant='h6' gutterBottom>
                Ready to watch ? Enter your email to create or restart your membership.
              </Typography>
                <div clasName={classes.inputBlock}>
                  <NetflixInput placeholder= "Email address"/>
                  <NetflixButton>Get Started</NetflixButton>
                </div>
                </>
                )}
            </div>
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      position:"relative",
      minHeight: "100vh",
      backgroundImage: `url(${HeroBanner})`, 
      objectFit: "contain",
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      position: "fixed",
      top: 10,
      left:20,
      width:"150px",
      cursor: "pointer"
    },
    sesion: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20,
    },
    info: {
      color: "#fff",
      zIndex: 15,
      textAling: "center",
      "& h4":{
        fontWeight: 800
      },
      "& h5":{
        fontWeight: 400
      },
    },

  }))

export default Login
