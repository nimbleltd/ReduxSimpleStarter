// create a new component
// component creates HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDIefq7JBKIMWiggVExyEiM08BY2CnonJQ';





// const App = function() {
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos : [] };

		YTSerach({key: API_KEY, term: 'Arnold Renderer'}, (videos) =>{
			//console.log(data)
			//this.setState({videos:videos});
			this.setState({ videos });
		});


	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// put generated HTML in the DOM //

ReactDOM.render(<App />, document.querySelector('.container'));
