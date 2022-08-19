class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="header" class="header">
            <div class="logo-container">
                <h1>CytoscapeJS Graphy</h1>
    
                <give-title></give-title>
            </div>
    
            <div class="two-column center">
                <add-node-button></add-node-button>
                <draw-edge-handles></draw-edge-handles>
                <div id="selected-node-edge" class="selected-node-edge center"></div>
            </div>
    
            <edit-graph-style></edit-graph-style>
    
            <div>
                <drag-and-drop></drag-and-drop>
                <export-buttons></export-buttons>
                <div class="one-column">
                    <activity-history></activity-history>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("header-section", Header);
