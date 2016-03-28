// create a new component
// component creates HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDIefq7JBKIMWiggVExyEiM08BY2CnonJQ';


YTSerach({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data)
});


// const App = function() {
class App extends Component {
	render() {
		return (<div>
			<SearchBar />
		</div>
		);
	}
}

// put generated HTML in the DOM //

ReactDOM.render(<App />, document.querySelector('.container'));
