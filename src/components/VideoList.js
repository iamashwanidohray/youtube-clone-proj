import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'


const VideoList = ({videoList,onVideoSelect}) => {

    console.log(onVideoSelect);

    const videoListItem = videoList.map((video,index) => <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />)

    return(
        <Grid container spacing={10} >
            {videoListItem}
        </Grid>    
    );
}
export default VideoList;
