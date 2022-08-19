class EditGraphStyle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="edit-styles-area" class="edit-styles-area three-column center">
                <div>
                    <graph-layout></graph-layout>
                    <edge-line-type></edge-line-type>
                </div>

                <div>
                    <node-color></node-color>    
                    <node-shape></node-shape>
                    <single-node-edit></single-node-edit>
                </div>
                
                <div>
                    <edge-color></edge-color>
                    <div class="two-column">
                        <edge-arrow-source></edge-arrow-source>
                        <edge-arrow-target></edge-arrow-target>
                    </div>
                    <single-edge-edit></single-edge-edit>
                </div>
            </div>
        `;
    }
}

customElements.define('edit-graph-style', EditGraphStyle);