class DragAndDropUpload extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="drop-area" class="drop-area">
                <div>
                <i class="fa fa-upload fa-2x"></i>
                </div>
                <input type="file" id="fileUpload" accept="text/json" onchange="handleFile(files)">
                <label class="drop-label" for="fileUpload">Upload JSON</label>
            </div>
        `;
        
        let dropArea = document.getElementById('drop-area');
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        })
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        dropArea.addEventListener('dragenter', highlight, false);
        dropArea.addEventListener('dragover', highlight, false);
        dropArea.addEventListener('dragleave', unhighlight, false);
        dropArea.addEventListener('drop', unhighlight, false);
        
        function highlight(e) {
            dropArea.classList.add('highlight');
        }
        
        function unhighlight(e) {
            dropArea.classList.remove('highlight');
        }
        
        dropArea.addEventListener('drop', handleDrop, false);            
    }
}

function handleDrop(e) {
    let dataTx = e.dataTransfer;
    let file = dataTx.files;
    handleFile(file);
}

function handleFile(file) {
    let reader = new FileReader();
    console.log(file);
    fileBlob = new Blob(file);
    console.log(fileBlob);
    reader.readAsText(fileBlob);

    reader.onloadend = function() {
        // console.log(reader.result);

        fileBody = reader.result;
        fileBody = JSON.parse(fileBody);
        cy.json(fileBody);
    }
    reader.onabort = () => console.log('Upload was cancelled');
    reader.onerror = () => console.log('Upload failed');
}

customElements.define('drag-and-drop', DragAndDropUpload);