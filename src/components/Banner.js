import { Button, makeStyles, Typography } from '@material-ui/core';
import UnConectBanner from "../images/a.jpg";

const Banner = () => {
    const classes = userStyles();
    const truncate = (string, n) => string.length > n ? `${string.substr(0, n-1)}...` : string;

    return (
        <div className={classes.root}>
          <div className={classes.content}>
            <Typography variant="h2" component="h1">
              Movie Tittle
            </Typography>
            <div className={classes.buttons}>
              <Button>Play</Button>
              <Button>My List</Button>
            </div>
            <Typography style={{wordWrap:"break-down" }} variant="h6" className={classes.desciption}>
              {
              truncate("descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion. descripcion o el cuerpo de la descripcion.descripcion o el cuerpo de la descripcion. descripcion o el cuerpo de la descripcion. descripcion o el cuerpo de la descripcion.", 150)
              }
            </Typography>
          </div>
          <div className={classes.fadeBottom} />
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      backgroundImage: `url(${UnConectBanner})`,
      position: "relative",
      height:"440px",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition:"center",
      color: "#fff"
    },
    buttons:{
      "& button":{
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1,4,1,4),
        marginRight: "1rem",
        backgroundColor: "rgba(51,51,51,0.5)",
      },
      "& button:hover": {
        color: "#000",
        backgroundColor: "#e6e6e6",
      }
    },
    fadeBottom:{
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
    }
  }))


export default Banner
