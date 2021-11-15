import { Container, makeStyles } from "@material-ui/core";
import Activity from "./Activity/activity";
import Dashboard from "./Dashboard/dashboard"
import Events from "./Events/events";
import Progress from "./Progress/progress";

const useStyles = makeStyles((theme) => ({

    container: {
        //paddingTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: theme.spacing(3),
    },
}));

const Feed = () => {

    const classes = useStyles()
    return (<Container >
        <div className={classes.container}>
            <Dashboard  />
            <Events />
            <Activity />
            <Progress />
        </div>
        
    </Container>)

};

export default Feed;