import logo from './logo.svg';
import './App.css';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import NavBar from './components/NavBar/navbar';
import SideBar from './components/SideBar/sidebar';
import Feed from './components/Feed/feed';


const useStyles = makeStyles((theme) => ({
  master: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  grid: {
    flex:"5",
    position: "fixed",
  },
  gril: {
    // backgroundColor: "#F5F5FB",
    flex:"95",

  }
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <NavBar/>
      <div className={classes.master}>
          <div className={classes.grid}>
            <SideBar/>
          </div>
          <div className={classes.gril}>
            <Feed/>
          </div>
      </div>
    </div>
  );
}

export default App;
