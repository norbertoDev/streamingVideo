import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header';

const Home = () => {
    const classes = userStyles();
    return (
        <div>
            <Header/>
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))

export default Home
