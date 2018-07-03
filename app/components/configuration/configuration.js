import React from 'react';
import settings from './settings.json';

class Configuration extends React.Component {
    render() {
        return (
            <div className="configuration container">
                <h3>Configuration</h3>
                <p>React SVG doughnut uses the following props to build the graphic.</p>
                <div className="flex-grid-row configuration__table-row">
                    <div className="flex-grid-col-4 configuration__table-cell"><p><strong>Setting</strong></p></div>
                    <div className="flex-grid-col-2 configuration__table-cell"><p><strong>Type</strong></p></div>
                    <div className="flex-grid-col-2 configuration__table-cell"><p><strong>Default value</strong></p></div>
                    <div className="flex-grid-col-4 configuration__table-cell"><p><strong>Description</strong></p></div>
                </div>
                {settings.map((data, index) => {
                    return (
                        <div className="flex-grid-row configuration__table-row" key={index}>
                            <div className="flex-grid-col-4 configuration__table-cell"><p><strong>{data.setting}</strong></p></div>
                            <div className="flex-grid-col-2 configuration__table-cell"><p>{data.type}</p></div>
                            <div className="flex-grid-col-2 configuration__table-cell"><p>{data.defaultValue}</p></div>
                            <div className="flex-grid-col-4 configuration__table-cell"><p>{data.description}</p></div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Configuration;
