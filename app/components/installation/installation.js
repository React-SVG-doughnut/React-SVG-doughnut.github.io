import React from 'react';
import { largeExample, example1 } from './example';

function createExampe() {
    return {__html: example1};
};

class Installation extends React.Component {
    render() {
        return (
            <div className="installation container">
                <h3>Installation</h3>
                <p>React SVG doughnut can be downloaded with yarn:</p>
                <pre className="jsx"><span className="jsx__char">$ yarn add react-svg-doughnut</span></pre>
                <p>Or via NPM:</p>
                <pre className="jsx"><span className="jsx__char">$ npm install react-svg-doughnut --save</span></pre>
                <p>Example of basic Usage:</p>
                <pre className="jsx" dangerouslySetInnerHTML={createExampe()} />
            </div>
        );
    }
}

export default Installation;
