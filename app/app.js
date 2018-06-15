import React    from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/intro';
import Installation from './components/installation/installation';
import Examples from './components/examples/examples';

class App extends React.Component {
	render() {
		return(
			<div className="container">
                <Intro />
				<Installation />
				<Examples />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('rsvgd-app')
);
