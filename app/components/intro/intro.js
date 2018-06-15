import React    from 'react';
import ReactDOM from 'react-dom';
import SvgDoughnut from 'react-svg-doughnut';

class Intro extends React.Component {
	render() {
		return(
			<div className="intro">
				<h1>React SVG Doughnut</h1>
                <p>A flexible, lightweight React component for<br />SVG doughnut charts made easy!</p>
                <SvgDoughnut percentage={100} label={'Awesome!'} settings={{
					size: 200,
					thickness: 15,
					pathColor: '#2980B9',
					circleColor: 'rgba(0, 0, 0, 0.15)',
					animationDuration: 1000
				}}/>
			</div>
		);
	}
};

export default Intro;
