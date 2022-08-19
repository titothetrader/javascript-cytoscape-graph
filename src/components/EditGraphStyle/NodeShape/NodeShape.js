class NodeShape extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="ns-dropdown-area" class="dropdown-area">
                <select id="ns-dropdown-list" class="dropdown-list" onChange=updateNodeShape(value) title="node-shape-dropdown">
                    <option selected hidden class="dropdown-item">All Nodes: Shape</option>
                    <option value="ellipse" class="dropdown-item">Ellipse</option>
                    <option value="triangle" class="dropdown-item">Triangle</option>
                    <option value="round-triangle" class="dropdown-item">Round Triangle</option>
                    <option value="rectangle" class="dropdown-item">Rectangle</option>
                    <option value="round-rectangle" class="dropdown-item">Round Rectangle</option>
                    <option value="bottom-round-rectangle" class="dropdown-item">Bottom Round Rectangle</option>
                    <option value="cut-rectangle" class="dropdown-item">Cut Rectangle</option>
                    <option value="barrel" class="dropdown-item">Barrel</option>
                    <option value="rhomboid" class="dropdown-item">Rhomboid</option>
                    <option value="diamond" class="dropdown-item">Diamond</option>
                    <option value="round-diamond" class="dropdown-item">Round Diamond</option>
                    <option value="square" class="dropdown-item">Square</option>
                    <option value="pentagon" class="dropdown-item">Pentagon</option>
                    <option value="round-pentagon" class="dropdown-item">Round Pentagon</option>
                    <option value="hexagon" class="dropdown-item">Hexagon</option>
                    <option value="concave-hexagon" class="dropdown-item">Concave Hexagon</option>
                    <option value="round-hexagon" class="dropdown-item">Round Hexagon</option>
                    <option value="heptagon" class="dropdown-item">Heptagon</option>
                    <option value="round-heptagon" class="dropdown-item">Round Heptagon</option>
                    <option value="octagon" class="dropdown-item">Octagon</option>
                    <option value="round-octagon" class="dropdown-item">Round Octagon</option>
                    <option value="star" class="dropdown-item">Star</option>
                    <option value="tag" class="dropdown-item">Tag</option>
                    <option value="vee" class="dropdown-item">Vee</option>
                </select>
            </div>
        `;

        nodeShapeDropdown = document.getElementById('ns-dropdown-list');
        shape = nodeShapeDropdown.options[nodeShapeDropdown.selectedIndex].value;
    }
}

let shape;
let nodeShapeDropdown;

function updateNodeShape(shape) {
    cy.style().selector('node').style('shape', shape).update();
}

customElements.define('node-shape', NodeShape);