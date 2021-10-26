import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';
import avatar from '../images/avatar.png';
import { NetflixButton } from '../styled/styledcomponents';

const Profile = () => {
    const classes = userStyles();
    const history = useHistory();


    const signout = () => {
      auth.signOut();
      history.push("/login");
    }

    return (
        <div className={classes.root}>
          <Header/>
          <Typography variant='h3'>Edit Profile</Typography>
            <div className={classes.info}>
              <img src={avatar} alt='avatar'/>
              <div className={classes.details}>
                <div className={classes.plans}>
                 <Typography variant="h6">email usuario</Typography>
                  <Typography className={classes.plansText} variant="h5" gutterBottom>Plans</Typography>
                  <Plans cost={7.99}>Netflix Standar</Plans>
                 <Plans cost={11.99}>Netflix Basic</Plans>
                  <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
                  <NetflixButton onClick={signout} wide="fullWidth" >Sign Out</NetflixButton>
                </div>
            </div>
          </div>
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      color: "#fff",
      minHeight: "100vh",
      maxWidth: "100wh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    info: {
      width: "35%",
      display: "flex",
      "& img": {
        height: "100px",
        [theme.breakpoints.down("xs")]:{
          display:"none"
        }
      }
    },
    details: {
      width: "100%",
      marginLeft: theme.spacing(3),
      "& h6":{
        backgroundColor:"#aaa",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: "18px"
      }
    },
    plans: {
      width: "100%",
    },
    plansText: {
      borderBottom: "1px solid lightgray",
    }

  }))

export default Profile
