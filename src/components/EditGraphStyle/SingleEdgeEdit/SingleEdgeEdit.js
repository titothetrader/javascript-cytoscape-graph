class SingleEdgeEdit extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="two-column">
                <button id="selected-edge-colorpicker-area" class="btn colorpicker-area">Edge Color</button>
                <div id="sel-dropdown-area" class="dropdown-area">
                    <select id="sel-dropdown-list" class="dropdown-list" onChange=updateSingleEdgeLine(value) title="node-shape-dropdown">
                    <option selected hidden class="dropdown-item">Line Type</option>
                    <option value="bezier" class="dropdown-item">Bezier</option>
                    <option value="unbundled-bezier" class="dropdown-item">Unbunbled Bezier</option>
                    <option value="haystack" class="dropdown-item">Haystack</option>
                    <option value="segments" class="dropdown-item">Segments</option>
                    <option value="straight" class="dropdown-item">Straight</option>
                    <option value="straight-triangle" class="dropdown-item">Straight Triangle</option>
                    </select>
                </div>
            </div>
        `;

        singleEdgeLineDropdown = document.getElementById('sel-dropdown-list');
        singleEdgeColorPicker = document.getElementById('selected-edge-colorpicker-area');

        singleEdgeLineDropdown.classList.add("hidden");
        singleEdgeColorPicker.classList.add("hidden");

        singleEdgeLine = singleEdgeLineDropdown.options[singleNodeShapeDropdown.selectedIndex].value;

        edgeParent = document.querySelector('#selected-edge-colorpicker-area');
        edgePicker = new Picker(edgeParent);
        edgePicker.onChange = function(singleEdgeColor) {
            let selectedEdgeColor = singleEdgeColor.rgbaString;
            cy.style().selector(cy.$(':selected')).style('line-color', selectedEdgeColor).update();
            cy.style().selector(cy.$(':selected')).style('source-arrow-color', selectedEdgeColor).update();
            cy.style().selector(cy.$(':selected')).style('target-arrow-color', selectedEdgeColor).update();
        };

    }
}

let singleEdgeLine;
let singleEdgeLineDropdown;
let singleEdgeColorPicker;

let edgeParent;
let edgePicker;

let edgeTapped;

cy.on('tap', 'edge', function(e){
    edgeTapped = e.target;
    edgeSelected = edgeTapped.id();
    document.getElementById('selected-node-edge').innerHTML = '<b>Selected Edge:</b> ' + edgeSelected;
    selectedNodeEdgeBox.classList.remove("no-selection");
    
    singleEdgeLineDropdown.classList.remove("hidden");
    singleEdgeColorPicker.classList.remove("hidden");

    singleNodeShapeDropdown.classList.add("hidden");
    singleNodeColorPicker.classList.add("hidden");
});

cy.on('tap', function(e) {
    if (e.target.id === undefined) {
        nodeSelected = '';
        document.getElementById('selected-node-edge').innerHTML = '<b>Nothing Selected</b>';

        selectedNodeEdgeBox.classList.add("no-selection");
        
        singleEdgeLineDropdown.classList.add("hidden");
        singleEdgeColorPicker.classList.add("hidden");
    }
});

function updateSingleEdgeLine(line) {
    console.log(line);
    cy.style().selector(cy.$(':selected')).style('curve-style', line).update();
}

customElements.define('single-edge-edit', SingleEdgeEdit);