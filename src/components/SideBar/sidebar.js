import { Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
import { useState } from "react";
import home from "../../assets/icons/IMG/menu/Home2.png";
import grid from "../../assets/icons/IMG/menu/Grid2.png";
import report from "../../assets/icons/IMG/menu/Rep2.png";
import stat from "../../assets/icons/IMG/menu/Stat2.png";
import chat from "../../assets/icons/IMG/menu/Chat2.png";


const useStyles = makeStyles((theme) => ({

    container: {
        height: "100vh",
        paddingTop: theme.spacing(12),
        backgroundColor: "#3E83FF",
        color: "white",
        position: "static",
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        }
    },
    textOpen: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    textClosed: {
        display: "none"
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    badge: {
        paddingLeft: "5px",
    },
}));

const SideBar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };

    const classes = useStyles()
    return (<Container className={classes.container}>
        <div className={classes.item}>
            <Menu className={classes.icon} onClick={handleToggle}/>
        </div>
        <div className={classes.item}>
            <IconButton className={classes.badge}> <img alt="home" src={home} /></IconButton>
            <Typography className={open? classes.textOpen : classes.textClosed}>Home</Typography>
        </div>
        <div className={classes.item}>
            <IconButton className={classes.badge}> <img alt="grid" src={grid} /></IconButton>
            <Typography className={open? classes.textOpen : classes.textClosed}>Grid</Typography>
        </div>
        <div className={classes.item}>
            <IconButton className={classes.badge}> <img alt="report" src={report} /></IconButton>
            <Typography className={open? classes.textOpen : classes.textClosed}>Reports</Typography>
        </div>
        <div className={classes.item}>
            <IconButton className={classes.badge}> <img alt="statistics" src={stat} /></IconButton>
            <Typography className={open? classes.textOpen : classes.textClosed}>Statistics</Typography>
        </div>
        <div className={classes.item}>
            <IconButton className={classes.badge}> <img alt="chat" src={chat} /></IconButton>
            <Typography className={open? classes.textOpen : classes.textClosed}>Chat</Typography>
        </div>
    </Container>);

};

export default SideBar;