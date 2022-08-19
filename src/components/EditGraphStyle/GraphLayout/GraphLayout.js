class GraphLayout extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div id="layout-dropdown-area" class="layout-dropdown-area">
                <select id="layout-dropdown-list" class="layout-dropdown-list" onChange=updateLayout(value) title="layout-dropdown">
                    <option selected hidden value="random" class="dropdown-item">Graph Layout</option>
                    <option value="breadthfirst" class="dropdown-item">BreadthFirst</option>
                    <option value="circle" class="dropdown-item">Circle</option>
                    <option value="concentric" class="dropdown-item">Concentric</option>
                    <option value="grid" class="dropdown-item">Grid</option>
                    <option value="cola" class="dropdown-item">Cola (Constraint Based)</option>
                    <option value="cose" class="dropdown-item">CoSE (Compound Spring Embedder)</option>
                    <option value="cose-bilkent" class="dropdown-item">CoSE Bilkent</option>
                    <option value="fcose" class="dropdown-item">fCoSE (Fast Compound)</option>
                    <option value="dagre" class="dropdown-item">Dagre (Top to Bottom)</option>
                    <option value="euler" class="dropdown-item">Euler (Equidistant)</option>
                    <option value="klay" class="dropdown-item">Klay (Left to Right)</option>
                    <option value="spread" class="dropdown-item">Spread (Wide Distribution)</option>
                    <option value="random" class="dropdown-item">Random</option>
                </select>
            </div>
        `;
        layoutDropdown = document.getElementById('layout-dropdown-list');
        layout = layoutDropdown.options[layoutDropdown.selectedIndex].value;
        layout
        updateLayout(layout);
    }
}

let layoutDropdown;

function updateLayout(value) {
    layout = value
    layout = cy.layout({
                name: value,
                animationDuration: 1000,
                minDist: 40
             });
      
    layout.run();
    graphUpdate();
}

customElements.define('graph-layout', GraphLayout);