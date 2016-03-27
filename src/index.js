// create a new component
// component creates HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDIefq7JBKIMWiggVExyEiM08BY2CnonJQ';



// const App = function() {
const App = () => {
	return (<div>
		<SearchBar />
	</div>
	);
}

// put generated HTML in the DOM //

ReactDOM.render(<App />, document.querySelector('.container'));
