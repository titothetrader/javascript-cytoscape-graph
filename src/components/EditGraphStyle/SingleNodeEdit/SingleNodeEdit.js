class SingleNodeEdit extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="two-column">
                <button id="selected-node-colorpicker-area" class="btn colorpicker-area">Node Color</button>
                <div id="sne-dropdown-area" class="dropdown-area">
                    <select id="sne-dropdown-list" class="dropdown-list" onChange=updateSingleNodeShape(value) title="node-shape-dropdown">
                        <option selected hidden class="dropdown-item">Node Shape</option>
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
            </div>
        `;

        singleNodeShapeDropdown = document.getElementById('sne-dropdown-list');
        singleNodeColorPicker = document.getElementById('selected-node-colorpicker-area');
        selectedNodeEdgeBox = document.getElementById('selected-node-edge');

        singleNodeShapeDropdown.classList.add("hidden");
        singleNodeColorPicker.classList.add("hidden");

        singleNodeShape = singleNodeShapeDropdown.options[singleNodeShapeDropdown.selectedIndex].value;
        document.getElementById('selected-node-edge').innerHTML = '<b>Nothing Selected</b>';
        selectedNodeEdgeBox.classList.add("no-selection");

        nodeParent = document.querySelector('#selected-node-colorpicker-area');
        nodePicker = new Picker(nodeParent);
        nodePicker.onChange = function(singleNodeColor) {
            let selectedNodeColor = singleNodeColor.rgbaString;
            cy.style().selector(cy.$(':selected')).style('background-color', selectedNodeColor).update();
        };

    }
}

let singleNodeShape;
let singleNodeShapeDropdown;
let singleNodeColorPicker;
let selectedNodeEdgeBox;

let nodeTapped;

let nodeParent;
let nodePicker;
let selectedNodeColor;

cy.on('tap', 'node', function(e){
    nodeTapped = e.target;
    nodeSelected = nodeTapped.id();
    document.getElementById('selected-node-edge').innerHTML = '<b>Selected Node:</b> ' + nodeSelected;
    selectedNodeEdgeBox.classList.remove("no-selection");
    
    singleNodeShapeDropdown.classList.remove("hidden");
    singleNodeColorPicker.classList.remove("hidden");

    singleEdgeLineDropdown.classList.add("hidden");
    singleEdgeColorPicker.classList.add("hidden");
});

cy.on('tap', function(e) {
    if (e.target.id === undefined) {
        nodeSelected = '';
        document.getElementById('selected-node-edge').innerHTML = '<b>Nothing Selected</b>';
        
        selectedNodeEdgeBox.classList.add("no-selection");

        singleNodeShapeDropdown.classList.add("hidden");
        singleNodeColorPicker.classList.add("hidden");
    }
});

function updateSingleNodeShape(shape) {
    cy.style().selector(cy.$(':selected')).style('shape', shape).update();
}

customElements.define('single-node-edit', SingleNodeEdit);