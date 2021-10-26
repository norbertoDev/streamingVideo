import { makeStyles } from '@material-ui/core';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home = () => {
    const classes = userStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Banner/>
        </div>
    )
}

const userStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: "#111",
      minHeight: "100vh",
    }, 
  }))

export default Home
