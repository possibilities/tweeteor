Meteor.publish("tweets", function () {
  return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
});

Meteor.publish("stats", function () {
  return Stats.find({});
});
