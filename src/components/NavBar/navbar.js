import { alpha, AppBar, Avatar, Badge, Button, IconButton, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Search} from "@material-ui/icons";
import logo from '../../assets/icons/IMG/Group@3x.png'
import avatar from '../../assets/icons/IMG/Placeholders/Profile/Picture@3x.png'
import notification from '../../assets/icons/IMG/NotificationIcon.png'
import chat from '../../assets/icons/IMG/Chat.png'

const useStyles = makeStyles((theme) => ({
    navbar: {
        position: "fixed",
        backgroundColor: "#FFFFFF",
        color: "black"
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    img: {
        display: "block",
        width: "12%",
        height: "auto",
     },
     search : {

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#E4E3ED",
        "&:hover": {
            backgroundColor: alpha("#9D9BB6", 0.25),
        },
        color: "#9D9BB6",
        width: "25%",
        paddingLeft: "1%",
        paddingRight: "1%",
        paddingTop: "0.5%",
        paddingBottom: "0.5%",
        marginTop: "1%",
        marginBottom: "1%",
     },
     input: {
        fontSize: "15px",
     },
     icons : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "25%",
     },
     avatar: {
        width: "25%",
        height: "auto",
        marginLeft: "5px",
     }, 
     profileName: {
        color: "#3D3A6F",
     },
     profile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
     },
     button: {
        borderRadius: "15px",
        fontSize: "12px",
        fontWeight: "600",
        height: "40px",
        backgroundColor: "#3D84FF",
        color: "white",
     },
     navicon: {
        display: "flex",
        alignItems: "center",
     }
}))
//<img alt="platform" className={classes.img} src={logo}></img>
const NavBar = () => {

    const classes = useStyles()
    return (<AppBar className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                    <img alt="platform" className={classes.img} src={logo}></img>
                    <div className={classes.search}>
                        <InputBase placeholder="Search and Find" className={classes.input}/>
                        <Search color="search.primary"/>
                    </div>
                    
                    <div className={classes.navicon}>
                    <Button variant="text" className={classes.button} size="medium" >+Add</Button>
                    <div className={classes.icons}>
                    </div>
                    <div className={classes.profile}>
                    <IconButton className={classes.badge}> <img alt="notification-button" src={notification} /></IconButton>
                    <IconButton className={classes.badge}> <img alt="notification-button" src={chat} /></IconButton>
                    <span className={classes.profileName}>Clarence Russell</span>
                    <Avatar alt="Kevin Smith" src={avatar} className={classes.avatar}/>
                    </div>
                    </div>
                    
                    
                </Toolbar>
                
            </AppBar>);

};

export default NavBar;