import { makeStyles } from '@material-ui/core'
import React from 'react'

const Profile = () => {
    const classes = userStyles();
    return (
        <div>
            Profile
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      //backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))

export default Profile
