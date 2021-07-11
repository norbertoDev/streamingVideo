import { makeStyles } from '@material-ui/core'
import React from 'react'

const SingUp = () => {
    const classes = userStyles();
    return (
        <div>
            SIng up
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))

export default SingUp
