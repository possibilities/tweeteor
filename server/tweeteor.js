Tweets = new Meteor.Collection("tweets");

var fastTimeoutSeconds = 25;
var slowTimeoutSeconds = 3 * 60; // 3 mins

var fastTimeout = fastTimeoutSeconds * 1000;
var slowTimeout = slowTimeoutSeconds * 1000;

Meteor.publish("tweets", function () {
  return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
});

var twitter = new Twitter();

var loadPublicTimeline = function() {
  try {
    var timeline = twitter.publicTimeline();
    _.each(timeline, function(tweet) {
      tweet.created_at_stamp = new Date(tweet.created_at).getTime();
      Tweets.insert(tweet);
    });
    console.log("Got " + timeline.length + " new tweets.");
    Meteor.setTimeout(loadPublicTimeline, fastTimeout);
  } catch (err) {
    console.log("Error, slowing shit down.", err);
    Meteor.setTimeout(loadPublicTimeline, slowTimeout);
  }
};

Meteor.startup(loadPublicTimeline);
