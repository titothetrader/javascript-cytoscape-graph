graphStyle = [{
  selector: 'node',
  style: {
    'shape': 'ellipse',
    'background-color': 'red',
    'label': 'data(id)'
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'target-arrow-shape': 'triangle'
  }
}, {
  selector: ':parent',
  style: {
    'background-opacity': 0.25,
    'background-color': 'lightblue',
    'shape': 'round-rectangle'
  }
}, {
  selector: ':selected',
  style: {
    'shape': 'ellipse',
    //  'background-color': 'steelblue',
    'border-width': '4',
    'border-color': 'steelblue'
  }
},
// Edge Handles Styles

{
  selector: '.eh-hover',
  style: {
    'background-color': 'red'
  }
}, {
  selector: '.eh-source',
  style: {
    'border-width': 2,
    'border-color': 'red'
  }
}, {
  selector: '.eh-target',
  style: {
    'border-width': 2,
    'border-color': 'red'
  }
}, {
  selector: '.eh-preview, .eh-ghost-edge',
  style: {
    'background-color': 'red',
    'line-color': 'red',
    'target-arrow-color': 'red',
    'source-arrow-color': 'red'
  }
}, {
  selector: '.eh-ghost-edge.eh-preview-active',
  style: {
    'opacity': 0
  }
},
// Expand & Collapse Styles
{
  selector: 'node.cy-expand-collapse-collapsed-node',
  style: {
    "background-color": "orange",
    "shape": "barrel"
  }
},
// Compound drag and drop
{
  selector: '.cdnd-grabbed-node',
  style: {
    'background-color': 'red'
  }
}, {
  selector: '.cdnd-drop-sibling',
  style: {
    'background-color': 'red'
  }
}, {
  selector: '.cdnd-drop-target',
  style: {
    'border-color': 'red',
    'border-style': 'dashed'
  }
}];