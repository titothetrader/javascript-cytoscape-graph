class AddNodeButton extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div id="add-node-area" class="add-node-area">
                <button type="button" id="addNodeBtn" class="btn" onClick=openAddNode()>Add Node</button>
                <div id="addNodeForm">
                    <div>
                        <label>Node ID
                            <input id="nodeId" type="text" placeholder="i.e.: node01"/>
                        </label>
                    </div>
                    <div>
                        <label>Node Label
                            <input id="nodeLabel" type="text" placeholder="i.e.: Node 01 Label"/>
                        </label>
                    </div>
                    <div class="two-column">
                        <button type="submit" class="btn btn-add add-node-btns" onClick=saveBtnData()>Create</button>
                        <button class="btn btn-cancel add-node-btns" onClick=cancelButton()>Cancel</button>
                    </div>
                </div>
            </div>
        `;
        divToHide = document.getElementById('addNodeForm');
        divToHide.style.display = 'none';
        divHidden = true;
        divAddNodeBtn = document.getElementById('addNodeBtn');
    }
}

let divToHide;
let divHidden;
let divAddNodeBtn;

function openAddNode() {
    if (divHidden) {
        divToHide.style.display = 'block';
        divAddNodeBtn.style.display = 'none';
    } else {
        divToHide.style.display = 'none';
        divAddNodeBtn.style.display = 'block';
    }
    divHidden = !divHidden;
}

function saveBtnData() {
    let nodeId = document.getElementById('nodeId').value;
    let nodeLabel = document.getElementById('nodeLabel').value;
    
    document.getElementById('nodeId').value = '';
    document.getElementById('nodeLabel').value = '' ;

    ur.do("add", {
        group: "nodes",
        data: {
            id: nodeId,
            label: nodeLabel    
        },
        position: {
            x: 200,
            y: 200
        }
    });
}

function cancelButton() {
    document.getElementById('nodeId').value = '';
    document.getElementById('nodeLabel').value = '';
    divToHide.style.display = 'none';
    divAddNodeBtn.style.display = 'block';
    divHidden = true;
}

customElements.define('add-node-button', AddNodeButton);