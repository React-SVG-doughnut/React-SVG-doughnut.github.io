export const smallExample = `<code><span class="jsx__char">&lt;</span><span class="jsx__kwd">SvgDoughnut</span> <span class="jsx__attr">percentage</span><span class="jsx__equ">=</span><span class="jsx__char">{</span><span class="jsx__int">100</span><span class="jsx__char">}</span> <span class="jsx__attr">label</span><span class="jsx__equ">=</span><span class="jsx__char">{</span><span class="jsx__str">'Awesome!'</span><span class="jsx__char">}</span> <span class="jsx__attr">settings</span><span class="jsx__equ">=</span><span class="jsx__char">{{</span>
    <span class="jsx__key">size</span><span class="jsx__colon">:</span> <span class="jsx__int">200</span><span class="jsx__char">,</span>
    <span class="jsx__key">thickness</span><span class="jsx__colon">:</span> <span class="jsx__int">5</span><span class="jsx__char">,</span>
    <span class="jsx__key">pathColor</span><span class="jsx__colon">:</span> <span class="jsx__str">'rgb(231, 83, 79)'</span><span class="jsx__char">,</span>
    <span class="jsx__key">circleColor</span><span class="jsx__colon">:</span> <span class="jsx__str">'rgba(0, 0, 0, 0.15)'</span><span class="jsx__char">,</span>
    <span class="jsx__key">animationDuration</span><span class="jsx__colon">:</span> <span class="jsx__int">1000</span>
<span class="jsx__char">}}/&gt;</span></code>`;

export const largeExample = `<code><span class="jsx__kwd">import</span> <span class="jsx__var">React</span> <span class="jsx__kwd">from</span> <span class="jsx__str">'react'</span><span class="jsx__char">;</span>
<span class="jsx__kwd">import</span> <span class="jsx__var">ReactDOM</span> <span class="jsx__kwd">from</span> <span class="jsx__str">'react-dom'</span><span class="jsx__char">;</span>
<span class="jsx__kwd">import</span> <span class="jsx__var">SvgDoughnut</span> <span class="jsx__kwd">from</span> <span class="jsx__str">'react-svg-doughnut'</span><span class="jsx__char">;</span>

<span class="jsx__int">class</span> <span class="jsx__attr">Example</span> <span class="jsx__int">extends</span> <span class="jsx__attr">React</span><span class="jsx__char">.</span><span class="jsx__attr">Component</span> <span class="jsx__char">{</span>
    <span class="jsx__attr">render</span><span class="jsx__char">() {</span>
        <span class="jsx__attr">return</span><span class="jsx__char">(</span>
            <span class="jsx__char">&lt;</span><span class="jsx__kwd">div</span><span class="jsx__char">&gt</span>
                <span class="jsx__char">&lt;</span><span class="jsx__kwd">SvgDoughnut</span> <span class="jsx__attr">percentage</span><span class="jsx__equ">=</span><span class="jsx__char">{</span><span class="jsx__int">100</span><span class="jsx__char">}</span> <span class="jsx__attr">settings</span><span class="jsx__equ">=</span><span class="jsx__char">{{</span>
                    <span class="jsx__key">labelText</span><span class="jsx__colon">:</span> <span class="jsx__str">'Awesome!'</span><span class="jsx__char">,</span>
                    <span class="jsx__key">size</span><span class="jsx__colon">:</span> <span class="jsx__int">200</span><span class="jsx__char">,</span>
                    <span class="jsx__key">thickness</span><span class="jsx__colon">:</span> <span class="jsx__int">5</span><span class="jsx__char">,</span>
                    <span class="jsx__key">primaryColour</span><span class="jsx__colon">:</span> <span class="jsx__str">'rgb(231, 83, 79)'</span><span class="jsx__char">,</span>
                    <span class="jsx__key">ringColour</span><span class="jsx__colon">:</span> <span class="jsx__str">'rgba(0, 0, 0, 0.15)'</span><span class="jsx__char">,</span>
                    <span class="jsx__key">animationDuration</span><span class="jsx__colon">:</span> <span class="jsx__int">1000</span>
                <span class="jsx__char">}}/&gt;</span>
            <span class="jsx__char">&lt;/</span><span class="jsx__kwd">div</span><span class="jsx__char">&gt</span>
        <span class="jsx__char">);</span>
    <span class="jsx__char">}</span>
<span class="jsx__char">};</span>

<span class="jsx__attr">ReactDOM</span><span class="jsx__char">.</span><span class="jsx__attr">render</span><span class="jsx__char">(</span>
    <span class="jsx__char">&lt;</span><span class="jsx__kwd">Example</span> <span class="jsx__char">/&gt,</span>
    <span class="jsx__attr">document</span><span class="jsx__char">.</span><span class="jsx__attr">getElementById</span><span class="jsx__char">(</span><span class="jsx__str">'app'</span><span class="jsx__char">)</span>
<span class="jsx__char">);</span>
</code>`;
