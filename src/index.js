// create a new component
// component creates HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDIefq7JBKIMWiggVExyEiM08BY2CnonJQ';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		YTSerach({key: API_KEY, term: 'Arnold Renderer'}, (videos) =>{
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

// put generated HTML in the DOM //

ReactDOM.render(<App />, document.querySelector('.container'));
