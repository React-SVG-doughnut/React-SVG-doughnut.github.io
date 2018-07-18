export const example1 = `<code><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">ReactDOM</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">SvgDoughnut</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-svg-doughnut<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Example</span> <span class="pl-k">extends</span> <span class="pl-e">React</span>.<span class="pl-smi">Component</span> {
    <span class="pl-en">render</span>() {
        <span class="pl-k">const</span> <span class="pl-c1">settings</span> <span class="pl-k">=</span> {
            value<span class="pl-k">:</span> <span class="pl-c1">100</span>,
            labelText<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Awesome!<span class="pl-pds">'</span></span>,
            size<span class="pl-k">:</span> <span class="pl-c1">180</span>,
            thickness<span class="pl-k">:</span> <span class="pl-c1">5</span>,
            animationDuration<span class="pl-k">:</span> <span class="pl-c1">1000</span>
        };

        <span class="pl-k">return</span>(
            <span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>SvgDoughnut {<span class="pl-k">...</span>settings}<span class="pl-k">/</span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
        );
    }
};

<span class="pl-smi">ReactDOM</span>.<span class="pl-en">render</span>(
    <span class="pl-k">&lt;</span>Example <span class="pl-k">/</span><span class="pl-k">&gt;</span>,
    <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>app<span class="pl-pds">'</span></span>)
);</code>`;
