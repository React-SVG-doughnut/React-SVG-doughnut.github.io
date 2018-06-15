import React    from 'react';
import ReactDOM from 'react-dom';
import { largeExample } from './example';

function createExampe() {
    return {__html: largeExample};
};

class Installation extends React.Component {
    render() {
        return (
            <div className="installation">
                <h3>Installation</h3>
                <p>React SVG doughnut can be downloaded via NPM:</p>
                <code className="jsx"><span className="jsx__char">npm install react-svg-doughnut --save</span></code>
                <p>Usage:</p>
                <pre className="jsx" dangerouslySetInnerHTML={createExampe()} />
            </div>
        );
    }
}

export default Installation;