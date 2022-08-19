class ExportButtons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="export-buttons-area" class="export-buttons-area two-column">
                <!-- button class="btn" onClick="saveJSON()">Save</button -->
                <button class="btn" onClick="exportPNG()">Export PNG</button>
                <button class="btn" onClick="exportJSON()">Export JSON</button>
            </div>
        `;
    }
}
function saveJSON() {
    const json = JSON.stringify(cy.json())
    $.ajax({
        url:'http://localhost:5000/save',
        type: 'POST',
        data:json,
        dataType:'json',
        success: function (msg) {
            console.log(msg)
        },
        error: function (jqXHR, textStatus) {
            let responseText = jQuery.parseJSON(jqXHR.responseText);
            console.log(responseText);
        }
    })

}
function exportPNG() {
    html2canvas(document.querySelector('#graph')).then(canvas => {        
        let img = canvas.toDataURL("image/png");
        let link = document.createElement('a');
        let title = document.getElementById('graph-title').innerHTML;
        link.download = title + '.png';
        link.href = "data:" + img;
        // let href = URL.createObjectURL(blob);
        // link.href = href
        document.body.appendChild(link)
        link.click()
    });
}

function exportJSON() {
    console.log('JSON');
    console.log(cy.json());

    const json = JSON.stringify(cy.json())
    const blob = new Blob([json], {type: 'application/json'})
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    let title = document.getElementById('graph-title').innerHTML;
    link.download = title + '.json';

    // Calling HTTP POST to send JSON to server
    // console.log('Enter the ajax code');
    // $.ajax({
    //     type : "POST",
    //     url : "/process_form",
    //     contentType : "application/json",
    //     data : json,
    //     dataType: "json",
    //     async: false,
    //     success: function(data) {
    //         alert("success: " + data);
    //     }
    // });
    
    document.body.appendChild(link)
    link.click()
}

customElements.define('export-buttons', ExportButtons);
