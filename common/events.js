Meteor.methods({
    addEvent: function(eventType, data) {
        var event = {
            createdAt: new Date(),
            eventType: eventType,
            data: data
        };
        Events.insert(event);
        emitter.emit(eventType, event);
    }
});
