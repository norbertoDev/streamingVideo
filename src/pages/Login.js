import { makeStyles } from '@material-ui/core'
import React from 'react'

const Login = () => {
    const classes = userStyles();
    return (
        <div>
            Login
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))

export default Login
