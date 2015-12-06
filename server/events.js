emitter = new EventEmitter();

Meteor.publish("events", function() {
    return Events.find({});
});
