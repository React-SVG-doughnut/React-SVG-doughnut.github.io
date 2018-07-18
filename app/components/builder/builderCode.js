import React from 'react';

class BuilderCode extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        function createHtml() {
            return {__html: html};
        };
        const ceiling = (this.props.format !== 'fraction') ? '' :`ceiling<span class="pl-k">:</span> <span class="pl-c1">${this.props.ceiling}</span>,`;

        const html = `<code><span class="pl-k">const</span> <span class="pl-c1">settings</span> <span class="pl-k">=</span> {
    format<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.format}<span class="pl-pds">'</span></span>,
    value<span class="pl-k">:</span> <span class="pl-c1">${this.props.value}</span>,
    size<span class="pl-k">:</span> <span class="pl-c1">${this.props.size}</span>,
    thickness<span class="pl-k">:</span> <span class="pl-c1">${this.props.thickness}</span>,
    percentageFontSize<span class="pl-k">:</span> <span class="pl-c1">${this.props.percentageFontSize}</span>,
    labelFontSize<span class="pl-k">:</span> <span class="pl-c1">${this.props.labelFontSize}</span>,
    primaryColour<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.primaryColour}<span class="pl-pds">'</span></span>,
    ringColour<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.ringColour}<span class="pl-pds">'</span></span>,
    labelColour<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.labelColour}<span class="pl-pds">'</span></span>,
    labelText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.labelText}<span class="pl-pds">'</span></span>,
    labelPosition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.labelPosition}<span class="pl-pds">'</span></span>,
    percentageFontWeight<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.percentageFontWeight}<span class="pl-pds">'</span></span>,
    labelFontWeight<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>${this.props.labelFontWeight}<span class="pl-pds">'</span></span>
    ${ceiling}
};

<span class="pl-k">return</span> <span class="pl-k">&lt;</span>SvgDoughnut {<span class="pl-k">...</span>settings}<span class="pl-k">/</span><span class="pl-k">&gt;</span></code>`;

        return (
            <div className="builder-code">
                <h3>Output</h3>
                <pre className="jsx" dangerouslySetInnerHTML={createHtml()} />
            </div>
        );
    }
}

export default BuilderCode;
