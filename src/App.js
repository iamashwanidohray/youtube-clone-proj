import React from 'react'
import { Grid } from '@material-ui/core'
import { SearchBar, VideoList, VideoDetail } from './components/'
import youtube from './api/youtube'

class App extends React.Component {


    state= {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyALsiWlvlco_ynTwjXw06ZMlp-57O8H_Ds'

            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            ...this.state,
            selectedVideo: video
        })
    }

    render() {
        const { selectedVideo,videos } = this.state;

        return (
            <Grid container justify="center" spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}></VideoDetail>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videoList={videos} onVideoSelect={this.onVideoSelect}></VideoList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;