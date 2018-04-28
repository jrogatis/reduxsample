import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyC5t9NrFE2Q8d605UFxd2Gb34-EvwkXyWE';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch(
      {
        key: API_KEY,
        term: 'surfboards',
      },
      videos =>
        this.setState({
          videos,
          selectedVideo: videos[0],
        }),
    );
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
