var removeEmptyParents = false;
var isParentOfOneChild = function isParentOfOneChild(node) {
  return node.isParent() && node.children().length === 1;
};
var removeParent = function removeParent(parent) {
  parent.children().move({
    parent: null
  });
  parent.remove();
};
var removeParentsOfOneChild = function removeParentsOfOneChild() {
  cy.nodes().filter(isParentOfOneChild).forEach(removeParent);
};

// custom handler to remove parents with only 1 child on drop
cy.on('cdndout', function (event, dropTarget) {
  if (removeEmptyParents && isParentOfOneChild(dropTarget)) {
    removeParent(dropTarget);
  }
});

// custom handler to remove parents with only 1 child (on remove of drop target or drop sibling)
cy.on('remove', function (event) {
  if (removeEmptyParents) {
    removeParentsOfOneChild();
  }
});