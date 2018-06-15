import React    from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/intro';
import Installation from './components/installation/installation';
import Footer from './components/footer/footer';

class App extends React.Component {
	render() {
		return(
			<div>
                <Intro />
				<Installation />
				<Footer />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('rsvgd-app')
);
