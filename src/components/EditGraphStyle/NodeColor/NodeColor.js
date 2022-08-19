class NodeColor extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="node-colorpicker-area" class="btn colorpicker-area">All Nodes: Color</button>
        `;

        nodeColorParent = document.querySelector('#node-colorpicker-area');
        nodeColorPicker = new Picker(nodeColorParent);
        nodeColorPicker.onChange = function(color) {
            let nodeColor = color.rgbaString;
            cy.style().selector('node').style('background-color', nodeColor).update();
            cy.style().selector(':compound').style('background-color', 'steelblue').update();
        };
    }
}

let nodeColorParent;
let nodeColorPicker;
// let color;

customElements.define('node-color', NodeColor);