class EdgeColor extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="edge-colorpicker-area" class="btn colorpicker-area">All Edges: Color</button>
        `;

        edgeColorParent = document.querySelector('#edge-colorpicker-area');
        edgeColorPicker = new Picker(edgeColorParent);
        edgeColorPicker.onChange = function(color) {
            let edgeColor = color.rgbaString;
            cy.style().selector('edge').style('line-color', edgeColor).update();
            cy.style().selector('edge').style('source-arrow-color', edgeColor).update();
            cy.style().selector('edge').style('target-arrow-color', edgeColor).update();
        };
    }
}

let edgeColorParent;
let edgeColorPicker;

// function updateEdgeLine(value) {
//     cy.style().selector('edge').style('line-color', value).update();
// }

customElements.define('edge-color', EdgeColor);