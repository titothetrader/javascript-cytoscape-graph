class DrawEdgeHandles extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="draw-edge-area" class="draw-edge-area">
                <button id="draw-on" class="btn btn-enable">Draw ON</button>
                <button id="draw-off" class="btn btn-cancel">Draw OFF</button>
            </div>
        `;

        let drawOnDiv = document.getElementById('draw-on');
        let drawOffDiv = document.getElementById('draw-off');
        drawOffDiv.style.display = 'none';
        
        document.querySelector('#draw-on').addEventListener('click', function() {
            eh.enableDrawMode();
            drawOnDiv.style.display = 'none';
            drawOffDiv.style.display = 'block';
        });
        document.querySelector('#draw-off').addEventListener('click', function() {
            eh.disableDrawMode();
            drawOnDiv.style.display = 'block';
            drawOffDiv.style.display = 'none';
        });
    }
}

function start() {
    eh.start();
  }

  function stop() {
    eh.stop();
  }

customElements.define('draw-edge-handles', DrawEdgeHandles);