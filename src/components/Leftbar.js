
import {Container, makeStyles, Typography} from "@material-ui/core"
import { Camera, Collections, FormatListBulleted, Group, Home, OndemandVideo, Settings } from "@material-ui/icons";





const useStyles = makeStyles((theme)=>({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
     backgroundColor:"white",
     color: "#555",
     border: "1px solid #ece7e7"
    }
  },
  icon:{
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize : "18px"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4) ,
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
    cursor: "pointer"
  } },
  text:{
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    } 

  }
  
  
}))

function Leftbar() {
  const classes = useStyles()
  return (
   
   <Container className={classes.container}>
     <div className={classes.item}>
       <Home className={classes.icon}/>
       <Typography className={classes.text}> Homepage </Typography>
     </div>
     <div className={classes.item}>
       <Group className={classes.icon}/>
       <Typography className={classes.text}> Friends </Typography>
     </div>
     <div className={classes.item}>
       <FormatListBulleted className={classes.icon}/>
       <Typography className={classes.text}> Lists </Typography>
     </div>
     <div className={classes.item}>
       <Camera className={classes.icon}/>
       <Typography className={classes.text}> Camera </Typography>
     </div>
     <div className={classes.item}>
       <OndemandVideo className={classes.icon}/>
       <Typography className={classes.text}> Videos </Typography>
     </div>
 
     <div className={classes.item}>
       <Collections className={classes.icon}/>
       <Typography className={classes.text}> Collections </Typography>
     </div>
    
     <div className={classes.item}>
       <Settings className={classes.icon}/>
       <Typography className={classes.text}> Settings </Typography>
     </div>
    
   </Container>
  );
}

export default Leftbar;
