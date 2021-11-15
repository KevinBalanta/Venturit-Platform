import { Accordion, AccordionDetails, AccordionSummary, Container, Icon, makeStyles, Typography } from "@material-ui/core";
import "./activity.css";
import follower from "../../../assets/icons/IMG/ic-followers.png";
import assignment from "../../../assets/icons/IMG/ic-assignments.png";
import event from "../../../assets/icons/IMG/ic-events.png";
import arrowDown from "../../../assets/icons/IMG/ArrowDown.png";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(4),
        //justifyContent: "space-between",
        //backgroundColor: "#F5F5FB",
       
    },
    title: {
        color: "#C0BFD0",
    },
    text: {
        color: "#103460",
        fontWeight: "500",
        marginBottom: theme.spacing(2),
    }, 
    
    divid: {
        display: "flex",
        alignItems: "center",
    }
}));

const Activity = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles()
    return (<Container className={classes.container}>
        
        <div className="title">
            <Typography className={classes.text} variant="h4">
                Activity
            </Typography>
            
        </div>
        <div className="container">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<Icon><img className="icon-accordion" src={arrowDown} alt="" /></Icon>}
         aria-controls="panel1d-content" id="panel1d-header">
            <img className="img-accordion" src={follower} alt="followers" />
          <Typography  className={classes.title}>You have new 5 followers including <span className="follower"> Kathryn Crawford</span> and <span className="follower">Piper Shaw</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary 
        expandIcon={<Icon><img className="icon-accordion" src={arrowDown} alt="" /></Icon>}
        aria-controls="panel2d-content" id="panel2d-header">
            <img className="img-accordion" src={event} alt="followers" />
          <Typography className={classes.title}>3 new events were added to your calendar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary 
        expandIcon={<Icon><img className="icon-accordion" src={arrowDown} alt="" /></Icon>}
        aria-controls="panel3d-content" id="panel3d-header">
            <img className="img-accordion" src={assignment} alt="followers" />
          <Typography className={classes.title}>You have 3 pending reading to complete 🤓 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </Container>)

};

export default Activity;