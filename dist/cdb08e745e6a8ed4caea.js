var expandCollapse = cy.expandCollapse({
  layoutBy: {
    name: "fcose",
    animate: true,
    randomize: false,
    fit: true
  },
  fisheye: true,
  animate: true,
  undoable: false,
  expandCueImage: "./assets/icon-plus.png",
  collapseCueImage: "./assets/icon-minus.png"
});