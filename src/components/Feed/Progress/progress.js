import { Button, Card, CardActions, CardContent, Container, Divider, makeStyles, Typography } from "@material-ui/core";
import "./progress.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import Circle from 'react-circle';

const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "row",
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(1),
        paddingRight: "5px",
        //justifyContent: "space-between",
        //backgroundColor: "#F5F5FB",
       
    },
    progresscontainer: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        height: "70%",
        backgroundColor: "#192D7C",
        borderRadius: "2%",
        alignItems: "center",
    },
    progress: {
        display: "flex",
        width: "50%",
        height: "60%",
        marginBottom: "15px",
    },
    title: {
        color: "white",   
        fontWeight: "500",
        fontSize: "30px",
        marginTop: "25px",
        marginBottom: "15px",
    },
    titlec: {
        color: "#103460",   
        fontWeight: "500",
        fontSize: "30px",
        marginTop: "35px",
        marginBottom: "25px",
    },
    root: {
        // maxWidth: 345,
        width: "30%",
        borderRadius: theme.spacing(1),
        "& :hover": {
          backgroundColor: "#1784FF",
          color: "white",
        },
    },
    cardscont: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "50px",
    },
    progressvalues: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    objtitle: {
        color: "#9C9AB5",
        fontSize: "20px",
        fontWeight: "600",
    },
    objvalue: {
        color: "#103460",
        fontSize: "40px",
        fontWeight: "600",
    },
    

}));

const Progress = () => {
    const mapi = [{ title: 'Total Webinars', value: 9}, {title: 'Pending Assignments', value: 0}, {title: 'Total Units', value: 5}, {title: 'Total Readings', value: 14}, {title: 'Total Videos', value: 5}]
    const classes = useStyles()
    
    return (<Container className={classes.container}>
        
        <div className={classes.progresscontainer}>
            <Typography className={classes.title} variant="h5">Progress Overview</Typography>
            <div className={classes.progress}>
                    <Circle
                animate={true} // Boolean: Animated/Static progress
                responsive={true} // Boolean: Make SVG adapt to parent size
                progress={40} 
                lineWidth={40} 
                progressColor="#FED200"
                bgColor="#FF794F" 
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} 
                textColor="white" // String: Color of percentage text color.
                textStyle={{ 
                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                }}
                ></Circle>
            </div>
            <div className="completed-box">
                <div className="completed-content">
                    <span className="completed">Completed</span>
                    <span className="hours">20 <span className="left">hours</span></span>
                </div>
                
                <div className="left-content">
                    <span className="left-to-go">Left to go</span>
                    <span className="hours">30 <span className="left">hours</span></span>
                </div>
            </div>
        </div>
        <div>
        <div className={classes.cardscont}>
            <Typography className={classes.titlec} variant="h5">Progress</Typography>
            <div className="cards">
                {mapi.map(obj => {
                    return (
                        <Card className={classes.root}>
                            <CardContent >
                                <div className={classes.progressvalues}>
                                    <span className={classes.objtitle}>{obj.title}</span>
                                    <span className={classes.objvalue}>{obj.value}</span>
                                </div>
                                
                            </CardContent>
                        </Card>
                    )}
                )}
            </div>
            <div className="footer">
                <span className="footer-text">Confirm your account details
                    <span className="footer-confirm">Please confirm your email and phone number.</span>
                </span>
            </div>

        </div>
        
        
        </div>
        </Container>)

};

export default Progress;