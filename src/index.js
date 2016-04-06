// create a new component
// component creates HTML
import _ from 'lodash';
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

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSerach({key: API_KEY, term: term}, (videos) =>{
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
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
