import React    from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/intro';

class App extends React.Component {
	render() {
		return(
			<div className="container">
                <Intro />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('rsvgd-app')
);
