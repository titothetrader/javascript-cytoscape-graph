var undoAction;
cy.on("afterUndo", function (e, name) {
  undoAction = "Undo";
  printHistory(name, undoAction);
});
cy.on("afterRedo", function (e, name) {
  undoAction = "Redo";
  printHistory(name, undoAction);
});
cy.on("afterDo", function (e, name) {
  undoAction = "Do";
  printHistory(name, undoAction);
});
function printHistory(name, undoType) {
  var color;
  undoAction = undoType;
  switch (name) {
    case 'add':
      color = "darkgreen";
      break;
    case 'deleteEles':
      name = "remove";
      color = "darkred";
      break;
    case 'remove':
      color = "darkred";
      break;
    case 'drag':
      color = "darkmagenta";
      break;
    default:
      color = "grey";
  }
  document.getElementById("undo-content").innerHTML += "<p style='color: ".concat(color, "; font-weight: bold'>").concat(undoAction, ": ").concat(name, "</p>");
}
function deleteEles(eles) {
  return eles.remove();
}
function restoreEles(eles) {
  return eles.restore();
}
ur.action("deleteEles", deleteEles, restoreEles);
document.addEventListener("keydown", function (e) {
  if (e.key === 'Delete' || e.key === 'Backspace') {
    var selecteds = cy.$(":selected");
    if (selecteds.length > 0) ur["do"]("deleteEles", selecteds);
  } else if (e.ctrlKey && e.target.nodeName === 'BODY') {
    if (e.key === 'z' || e.key === 'Z') ur.undo();else if (e.key === 'y' || e.key === 'Y') ur.redo();
  }
});