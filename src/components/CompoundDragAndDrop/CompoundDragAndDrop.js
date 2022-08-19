let removeEmptyParents = false;

let isParentOfOneChild = function(node){
    return node.isParent() && node.children().length === 1;
};

let removeParent = function(parent){
    parent.children().move({ parent: null });
    parent.remove();
};

let removeParentsOfOneChild = function(){
    cy.nodes().filter(isParentOfOneChild).forEach(removeParent);
};

// custom handler to remove parents with only 1 child on drop
cy.on('cdndout', function(event, dropTarget){
    if( removeEmptyParents && isParentOfOneChild(dropTarget) ){
        removeParent(dropTarget);
}
});

// custom handler to remove parents with only 1 child (on remove of drop target or drop sibling)
cy.on('remove', function(event){
    if( removeEmptyParents ){
        removeParentsOfOneChild();
    }
});