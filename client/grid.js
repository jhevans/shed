Meteor.subscribe("events");

Template.grid.helpers({
    rows: function(){
        console.log("rows helper");
        var rows =  Events.findOne({}, {
            sort: {createdAt: -1, limit: 1}
        })

        console.log("rows:");
        console.log(rows);

        return rows.data;
    }
});
