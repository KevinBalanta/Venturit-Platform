import { Container, makeStyles, Typography } from "@material-ui/core";
import "./dashboard.css";
import flag from "../../../assets/icons/IMG/Flag@2x.png";
import person from "../../../assets/icons/IMG/Group1@1,5x.svg";

const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-between",
        paddingTop: theme.spacing(15),
        marginBottom: theme.spacing(4),
        //backgroundColor: "#F5F5FB",
       
    },
    text: {
        color: "#103460",
        fontWeight: "500",
        [theme.breakpoints.down("sm")]: {
            fontSize: "8vw",
        }
    }, 
    flag: {
        width: "15%",
        height: "auto",
    },
    currently: {
        fontSize: "70%",
        fontWeight: "600",
        color: "#B3B2C7",
    },
    language: {
        fontSize: "25px",
        fontWeight: "550",
        color: "#103460",
    },
    divid: {
        display: "flex",
        alignItems: "center",
    }
}));

const Dashboard = () => {

    const classes = useStyles()
    return (<Container className={classes.container}>
        
        <div className="title">
            <Typography className={classes.text} variant="h4">
                Dashboard
            </Typography>
            
            <div className="language-class">
                <span className={classes.currently}>Currently Learning</span>
                <div className={classes.divid}>
                    <img className={classes.flag} src={flag} alt="flag" />
                    <span className={classes.language}>English</span>
                </div>
                
            </div>
        </div>
        <div className="welcome-images">
            <div className="person">
                <img className="header-person-img" alt="person" src={person} />
            </div>
            <div className="welcome-text">
                <p className="img-text">Welcome back, Clarence</p>
                <span className="img-text-span">Ta da! You're up to date 🥳</span>
            </div>
        </div>
        </Container>)

};

export default Dashboard;