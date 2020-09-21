import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
// import {Grid} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 200,
//     },
//     media: {
//       height: 100,
//     },
//   });


const VideoItem = ({video, onVideoSelect}) => {

    // const classes = useStyles();

    return(
        <Grid item xs={12} style={{ cursor: 'pointer'}}>
            <Paper style={{ display: 'flex', alignItems: 'center' }} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.default.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
        // <Grid item xs={12}>
        //     <Card className={classes.root}>
        //         <CardActionArea>
        //             <CardMedia
        //                 className={classes.media}
        //                 image={video.snippet.thumbnails.medium.url}
        //                 title="thumbnail"
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="subtitle1" component="h2">
        //                     {video.snippet.title}
        //                 </Typography>
        //             </CardContent>
        //             </CardActionArea>
        //             <CardActions>
        //             {/* <Button size="small" color="primary">
        //                 Share
        //             </Button>
        //             <Button size="small" color="primary">
        //                 Learn More
        //             </Button> */}
        //         </CardActions>
        //     </Card>
        // </Grid>
    );
}

export default VideoItem;