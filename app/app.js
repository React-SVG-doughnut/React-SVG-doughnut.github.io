import React    from 'react';
import ReactDOM from 'react-dom';
import SvgDoughnut from '/Users/daniel.osborne/repos/react-svg-doughnut/src/index';

class App extends React.Component {
	render() {
		return(
			<div className="home">
				<SvgDoughnut percentage={80} label={'Complete'} settings={{
					size: 150,
					thickness: 10,
					pathColor: 'rgb(231, 83, 79)',
					circleColor: 'rgba(0, 0, 0, 0.15)',
					animationDuration: 1000
				}}/>
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
