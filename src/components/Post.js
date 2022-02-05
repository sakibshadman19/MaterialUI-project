
import {Button, Card, CardActionArea, CardContent, CardMedia, makeStyles,CardActions, Typography} from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
  media : {
      height: 250,
      [theme.breakpoints.down("sm")]:{
          height: 150,
      }
  },
  card:{
      marginBottom : theme.spacing(5),
  }
  
}))

function Post() {
  const classes = useStyles()
  return (
<Card className={classes.card}>
    <CardActionArea>
        <CardMedia className={classes.media}
            image ="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr3D2&w=5oe"
              title="My Post"
        />
        <CardContent>
            <Typography  gutterBottom
            variant="h5">
            My first post

            </Typography>
            <Typography 
            variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rerum soluta sit, similique, repellendus mollitia maxime blanditiis laudantium repudiandae dolor dicta laborum aspernatur modi aliquam et assumenda eligendi perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rerum soluta sit, similique, repellendus mollitia maxime blanditiis laudantium repudiandae dolor dicta laborum aspernatur modi aliquam et assumenda eligendi perferendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rerum soluta sit, similique, repellendus mollitia maxime blanditiis laudantium repudiandae dolor dicta laborum aspernatur modi aliquam et assumenda eligendi perferendis?

            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">
            Share
        </Button>
        <Button size="small" color="primary">
            Learn More
        </Button>
    </CardActions>
</Card>
  );
}

export default Post;
