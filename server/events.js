Meteor.publish("events", function() {
    return Events.find({});
});


Meteor.methods({
    addEvent: function(eventType, data) {
        Events.insert({
            createdAt: new Date(),
            eventType: eventType,
            data: data
        });
    }
});
