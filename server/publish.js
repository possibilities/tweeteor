Meteor.publish('tweets', function () {
  return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
});

Meteor.publish('appData', function () {
  return AppData.find({});
});

Meteor.startup(function() {
  _.each(['appData', 'tweets'], function(collection) {
    _.each(['insert', 'update', 'remove'], function(method) {
      Meteor.default_server.method_handlers['/' + collection + '/' + method] = function() {};
    });
  });
});
