import { makeStyles } from '@material-ui/core'
import React from 'react'

const Row = () => {
    const classes = userStyles();
    return (
        <div>
            Row
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))


export default Row
