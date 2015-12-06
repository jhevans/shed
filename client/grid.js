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
