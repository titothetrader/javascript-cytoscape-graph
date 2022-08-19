class EdgeLineType extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div id="elt-dropdown-area" class="elt-dropdown-area">
                <select id="elt-source-dropdown-list" class="elt-source-dropdown-list" onChange=updateLineType(value) title="edge-arrow-shape-dropdown">
                    <option selected hidden class="dropdown-item">All Lines: Type</option>
                    <option value="bezier" class="dropdown-item">Bezier</option>
                    <option value="unbundled-bezier" class="dropdown-item">Unbunbled Bezier</option>
                    <option value="haystack" class="dropdown-item">Haystack</option>
                    <option value="segments" class="dropdown-item">Segments</option>
                    <option value="straight" class="dropdown-item">Straight</option>
                    <option value="straight-triangle" class="dropdown-item">Straight Triangle</option>
                    <option value="taxi" class="dropdown-item">Taxi</option>
                </select>
            </div>
        `;

        edgeLineDropdown = document.getElementById('elt-source-dropdown-list');
        sourceArrow = edgeLineDropdown.options[edgeLineDropdown.selectedIndex].value;

    }
}

let lineType;
let edgeLineDropdown;

function updateLineType(lineType) {
    cy.style().selector('edge').style('curve-style', lineType).update();
    console.log(lineType);
}


customElements.define('edge-line-type', EdgeLineType);