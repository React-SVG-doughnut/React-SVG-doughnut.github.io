import React from 'react';
import SvgDoughnut from 'react-svg-doughnut';
import BuilderCode from './builderCode';

class Builder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 75,
            format: 'percentage',
            ceiling: 100,
            thickness: 15,
            size: 300,
            primaryColour: '#2980B9',
            ringColour: '#AAAAAA',
            percentageFontSize: 35,
            percentageFontWeight: 'bold',
            labelText: 'Label text',
            labelPosition: 'bottom',
            labelFontSize: 18,
            labelFontWeight: 'normal',
            labelColour: '#333333'
        }
    }

    changeSetting(setting, event) {
        const value = event.target.value;
        const state = this.state;
        state[setting] = value;
        this.setState(state);
    }

    render() {
        return (
            <div className="builder container">
                <h3>Build your own</h3>
                <div className="flex-grid-row">
                    <div className="flex-grid-col-5">
                        <div className="builder__setting">
                            <label>Format:</label>
                            <select value={this.state.format} onChange={this.changeSetting.bind(this, 'format')}>
                                <option>percentage</option>
                                <option>fraction</option>
                            </select>
                        </div>
                        <div className="builder__setting">
                            <label>Value:</label>
                            <input type="range" value={this.state.value} onChange={this.changeSetting.bind(this, 'value')} min="0" max={this.state.ceiling}/>
                        </div>
                        {this.state.format === 'fraction' && 
                            <div className="builder__setting">
                                <label>Ceiling:</label>
                                <input type="range" value={this.state.ceiling} onChange={this.changeSetting.bind(this, 'ceiling')} min="1" max="500"/>
                            </div>
                        }
                        <div className="builder__setting">
                            <label>Size:</label>
                            <input type="range" value={this.state.size} onChange={this.changeSetting.bind(this, 'size')} min="100" max="500"/>
                        </div>
                        <div className="builder__setting">
                            <label>Thickness:</label>
                            <input type="range" value={this.state.thickness} onChange={this.changeSetting.bind(this, 'thickness')} min="3" max="50"/>
                        </div>
                        <div className="builder__setting">
                            <label>Value font size:</label>
                            <input type="range" value={this.state.percentageFontSize} onChange={this.changeSetting.bind(this, 'percentageFontSize')} min="10" max="100"/>
                        </div>
                        <div className="builder__setting">
                            <label>Label font size:</label>
                            <input type="range" value={this.state.labelFontSize} onChange={this.changeSetting.bind(this, 'labelFontSize')} min="10" max="100"/>
                        </div>
                        <div className="builder__setting">
                            <label>Primary colour:</label>
                            <input type="color" value={this.state.primaryColour} onChange={this.changeSetting.bind(this, 'primaryColour')}/>
                        </div>
                        <div className="builder__setting">
                            <label>Ring colour:</label>
                            <input type="color" value={this.state.ringColour} onChange={this.changeSetting.bind(this, 'ringColour')}/>
                        </div>
                        <div className="builder__setting">
                            <label>Label colour:</label>
                            <input type="color" value={this.state.labelColour} onChange={this.changeSetting.bind(this, 'labelColour')}/>
                        </div>
                        <div className="builder__setting">
                            <label>Label text:</label>
                            <input type="text" value={this.state.labelText} onChange={this.changeSetting.bind(this, 'labelText')}/>
                        </div>
                        <div className="builder__setting">
                            <label>Label position:</label>
                            <select value={this.state.labelPosition} onChange={this.changeSetting.bind(this, 'labelPosition')}>
                                <option>top</option>
                                <option>bottom</option>
                            </select>
                        </div>
                        <div className="builder__setting">
                            <label>Value font weight:</label>
                            <select value={this.state.percentageFontWeight} onChange={this.changeSetting.bind(this, 'percentageFontWeight')}>
                                <option>normal</option>
                                <option>bold</option>
                            </select>
                        </div>
                        <div className="builder__setting">
                            <label>Label font weight:</label>
                            <select value={this.state.labelFontWeight} onChange={this.changeSetting.bind(this, 'labelFontWeight')}>
                                <option>normal</option>
                                <option>bold</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-grid-col-7 builder__preview">
                        <SvgDoughnut {...this.state} />
                    </div>
                </div>
                <BuilderCode {...this.state}/>
            </div>
        );
    }
}

export default Builder;
