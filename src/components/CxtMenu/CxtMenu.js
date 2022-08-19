cy.cxtmenu({
    selector: 'node',

    commands: [
        {
            content: '<i class="fa fa-plus fa-2x"></i>',
            select: function(ele){
                openAddNode();
            },
            enabled: true
        },
        {
            content: '<i class="fa fa-trash-o fa-2x"></i>',
            select: function(ele){
                let id = ele.id();
                ur.do("remove", ele);
            },
            enabled: true
        },
        {
            content: '<i class="fa fa-long-arrow-right fa-2x"></i>',
            select: function(ele){
                eh.start(ele);
            },
            enabled: true
        },
        
    ]
});

cy.cxtmenu({
    selector: 'edge',

    commands: [
        {
            content: '<i class="fa fa-paint-brush fa-2x"></i>',
            select: function(ele){
                let id = ele.id();
                cy.style().selector(ele).style('line-color', 'blue').update();
                cy.style().selector(ele).style('source-arrow-color', 'blue').update();
                cy.style().selector(ele).style('target-arrow-color', 'blue').update();
            },
            enabled: true
        },    
        {
            content: '<i class="fa fa-trash-o fa-2x"></i>',
            select: function(ele){
                let id = ele.id();
                ur.do("remove", ele);
            },
            enabled: true
        },        
    ]
});

cy.cxtmenu({
    selector: 'core',

    commands: [
        {
            content: '<i class="fa fa-plus fa-2x"></i>',
            select: function(ele){
                openAddNode();
            },
            enabled: true
        },

        {
            content: '<i class="fa fa-eraser fa-2x"></i>',
            select: function(){
                $.ajax({
                    url: "./default-data/blank-canvas.json",
                    dataType: "text",
                    success: function() {
                        // console.log('Button CSS loaded');
                    }
                }).then((blankJSON) => {
                    cy.json(JSON.parse(blankJSON));                    
                })
            }
        }
    ]
});
