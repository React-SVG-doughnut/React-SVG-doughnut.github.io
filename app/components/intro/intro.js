import React    from 'react';
import SvgDoughnut from 'react-svg-doughnut';

class Intro extends React.Component {
	render() {
		return(
			<div className="intro">
				<h1 className="sarina">React SVG Doughnut</h1>
                <p>A flexible, lightweight React component for<br />SVG doughnut charts made easy!</p>
                <SvgDoughnut settings={{
					percentage: 100,
					labelText: 'Awesome!',
					size: 200,
					thickness: 15,
					primaryColour: '#2980B9',
					ringColour: 'rgba(0, 0, 0, 0.15)',
					animationDuration: 1000
				}}/>
			</div>
		);
	}
};

export default Intro;
