import React from 'react';
import Package from '../../../node_modules/react-svg-doughnut/package.json';
const GithubUrl = 'https://github.com/dannyoz/react-svg-doughnut';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <p>v {Package.version}</p>
                    <a href={GithubUrl}>Github</a>
                </div>
            </div>
        );
    }
}

export default Footer;
