import React    from 'react';
import SvgDoughnut from 'react-svg-doughnut';

class Intro extends React.Component {
	render() {
		const settings = {
			value: 100,
			format: 'percentage',
			labelText: 'Awesome!',
			size: 200,
			thickness: 15,
			primaryColour: '#2980B9',
			animationDuration: 1000
		};
		return(
			<div className="intro">
				<h1 className="sarina">React SVG Doughnut</h1>
                <p>A flexible, lightweight React component for<br />SVG doughnut charts made easy!</p>
                <SvgDoughnut {...settings}/>
			</div>
		);
	}
};

export default Intro;
