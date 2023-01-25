document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.target.nodeName === 'BODY') {
    if (e.key === 'c' || e.key === 'C') cb.copy(cy.$(":selected"));else if (e.key === 'v' || e.key === 'V') ur["do"]("paste");else if (e.key === 'a' || e.key === 'A') cy.elements().select();
    e.preventDefault();
  }
});