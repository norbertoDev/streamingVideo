import { makeStyles, Typography } from '@material-ui/core';
import {NetflixButton} from '../styled/styledcomponents';
import React from 'react'

const Plans = ({cost, children,color,wide}) => {
    const classes = userStyles();
    return (
        <div className={classes.root}>
          <Typography className={classes.standard} variant='h5'>
            {children}
          </Typography>
          <NetflixButton color={color} wide={wide}> Subscribe </NetflixButton>
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& button": {
        marginBottom: theme.spacing(2),
      },
    },
    standard: {
      fontSize: "1.2rem"
    }
  }))


export default Plans
