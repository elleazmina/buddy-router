import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginLeft: 500,
    marginBottom: 50,
  },
});

const Post = (props) => {
  const { id, title} = props.post;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="https://sites.google.com/site/socialbuddyfollowers/_/rsrc/1523720352060/home/social%20buddy%20logo.png"
          
        />
        <CardContent className="post">
          <Typography gutterBottom variant="h5" component="h2">
            ID: #{id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      <Link to={`/detail/${id}`}>
         <Button className="detail-button" variant="contained">See Details</Button>
       </Link>
      </CardActions>
    </Card>
  );
}
//     <div className="post">
//       <h2>Title: {title}</h2>
//       <p>
//         <small>ID: #{id}</small>
//       </p>
//       <br />
//       <Link to={`/detail/${id}`}>
//         <Button className="detail-button" variant="contained">See Details</Button>
//       </Link>
//     </div>
//   );
// };

export default Post;
