class GiveTitle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="give-title-area" class="give-title-area">
                <div>
                    <label><h2>Title
                        <input id="title" type="text" placeholder="My Graph Title" onkeypress="updateTitle(value)" onchange="updateTitle(value)" onClick="updateTitle(value)"/>
                    </h2></label>
                </div>
            </div>
        `;
        document.getElementById('graph-title').innerHTML = 'My Graph Title';
    }
}

function updateTitle(value) {
    document.getElementById('graph-title').innerHTML = value;
    !value ? document.getElementById('graph-title').innerHTML = 'My Graph Title' : '';
}

customElements.define('give-title', GiveTitle);