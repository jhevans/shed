Meteor.subscribe("events");

Template.grid.helpers({
    rows: function(){
        var rows =  Events.findOne({}, {
            sort: {createdAt: -1, limit: 1}
        });

        if (!rows){
            return [];
        }
        return rows.data;
    },
    colour: function(){
        return this.colour
    }
});


Template.gridView.helpers({
    numberOfUpdates: function(){
        return Session.get("numberOfUpdates");
    }
});

Template.gridView.created = function(){
    var numberOfUpdates = 0;
    emitter.on('gridUpdate', function(data){
        Session.set('numberOfUpdates', ++numberOfUpdates);
    });
    Session.set('numberOfUpdates', numberOfUpdates);
};

Template.gridView.events({
    "click button.randomiseGrid": function(){
        Meteor.call("addEvent", "gridUpdate", randomGrid());
    }
});


function randomGrid(){
    var rows = [];
    _.range(12)
        .forEach(function(n){
            var row = [];
            _.range(12)
                .forEach(function(n){
                    var occupied = Math.random() > 0.95;
                    val = {
                        occupied: occupied,
                        colour: occupied ? "#9C9" : "#fff",
                        occupantType: "plant"
                    };
                    row.push(val);
                });
            rows.push(row);
        });
    return  rows;
}
