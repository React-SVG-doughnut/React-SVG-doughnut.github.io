import React    from 'react';
import ReactDOM from 'react-dom';
import SvgDoughnut from '/Users/daniel.osborne/repos/react-svg-doughnut/src/index';

class Intro extends React.Component {
	render() {
		return(
			<div className="intro">
				<h1>React SVG Doughnut</h1>
                <p>A flexible, lightweight React component for<br />SVG doughnut charts made easy!</p>
                <SvgDoughnut percentage={100} label={'Awesome!'} settings={{
					size: 200,
					thickness: 5,
					pathColor: 'rgb(231, 83, 79)',
					circleColor: 'rgba(0, 0, 0, 0.15)',
					animationDuration: 1000
				}}/>
			</div>
		);
	}
};

export default Intro;
