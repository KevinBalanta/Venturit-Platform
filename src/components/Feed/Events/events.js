import { Container, Divider, makeStyles, Typography } from "@material-ui/core";
import "./events.css";
import { Carousel } from 'react-bootstrap';
import clock from "../../../assets/icons/IMG/clock.png";
import eventA from "../../../assets/icons/IMG/eventA.png";
import eventB from "../../../assets/icons/IMG/eventB.png";

const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(4),
        //justifyContent: "space-between",
        //backgroundColor: "#F5F5FB",
       
    },
    text: {
        color: "#103460",
        fontWeight: "500",
        marginBottom: theme.spacing(2),
    }, 
    textdesc: {
        color: "#103460",
        fontWeight: "500",
        marginBottom: theme.spacing(2),
        paddingTop: "0",
        fontSize: "20px",
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
    }, 
    events: {
        display: "flex",
        flexDirection: "column",
    },
    event: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: theme.spacing(3),
        backgroundColor: "white",
        borderRadius: "5%",
        width: "190px",
    },
}));

const Events = () => {

    const classes = useStyles()
    return (<Container className={classes.container}>
        
        <div className="title">
            <Typography className={classes.text} variant="h4">
                Events
            </Typography>
        </div>
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <span className="type">SCIENCE</span>
                    <img
                        className="d-block w-100"
                        src={clock}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <span className="carousel-text-left">Youth Talent & Education</span>
                        <span className="carousel-text-right">May 20</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <span className="type">SCIENCE</span>
                    <img
                        className="d-block w-100"
                        src={clock}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <span className="carousel-text-left">Youth Talent & Education</span>
                        <span className="carousel-text-right">May 20</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <span className="type">SCIENCE</span>
                    <img
                        className="d-block w-100"
                        src={clock}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <span className="carousel-text-left">Youth Talent & Education</span>
                        <span className="carousel-text-right">May 20</span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="event-description">
                <span className={classes.textdesc}>
                    Events Today
                </span>
                <div className={classes.events}>
                    <div className={classes.event}>
                        <img className="event-icon" alt="eventone" src={eventB} />
                        <div className="descript">
                            <span className="hour">10:30AM</span>
                            <span className="text-event">Webinar: the basics of...</span>
                        </div>
                        
                    </div>
                    <div className={classes.event}>
                        <img className="event-icon" alt="eventtwo" src={eventA} />
                        <div className="descript">
                            <span className="hour">2:15PM</span>
                            <span className="text-event">Team Building Activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>)

};

export default Events;