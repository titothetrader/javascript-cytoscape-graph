class ActivityHistory extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div id="undo-history" class="undo-history">
                <button type="button" id="undo-button" class="btn undo-button">Activity History</button>
                <div id="undo-content" class="undo-content"></div>
            </div>
        `;
        undo = document.getElementById("undo-button");
        undoContent = document.getElementById("undo-content");
        
        let undoOpen = false;

        undo.addEventListener("click", function(e) {
            undoOpen = !undoOpen;
            undoContent.style.display = undoOpen ? "block" : "none";
        });
    }
}

customElements.define('activity-history', ActivityHistory);