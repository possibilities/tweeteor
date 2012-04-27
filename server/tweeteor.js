Tweets = new Meteor.Collection("tweets");

var fastTimeoutSeconds = 25;
var slowTimeoutSeconds = 3 * 60; // 3 mins

var fastTimeout = fastTimeoutSeconds * 1000;
var slowTimeout = slowTimeoutSeconds * 1000;

Meteor.publish("tweets", function () {
  return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
});

var twitter = new Twitter();
