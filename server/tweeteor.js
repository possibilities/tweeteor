Tweets = new Meteor.Collection("tweets");
Stats = new Meteor.Collection("stats");

var timeout = 60 * 1000;

Meteor.publish("tweets", function () {
  return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
});

Meteor.publish("stats", function () {
  return Stats.find({});
});

var twitter = new Twitter();

var setStat = function(name, value) {
  var query = { name: 'stats' };
  var modifier = {};

  if (Stats.find(query).count() === 0) {
    Stats.insert(query);
  } 

  modifier[name] = value;
  Stats.update(query, { $set: modifier });
};

var getStat = function(name) {
  var query = { name: 'stats' };
  var finder = Stats.find(query);

  if (finder.count() === 0) {
    Stats.insert(query);
  } 

  return finder.fetch()[0][name];
};

var loadPublicTimeline = function() {
  console.log(1);
  try {
    var timeline = twitter.publicTimeline();
    _.each(timeline, function(tweet) {
      tweet.created_at_stamp = new Date(tweet.created_at).getTime();
      Tweets.insert(tweet);
    });
    setStat('updatedAt', new Date);
    console.log('finished', timeline.length);
  } catch (err) {
    console.log('erred', timeline.length);
  }
  
};

Meteor.startup(function() {
  loadPublicTimeline();
  Meteor.setInterval(loadPublicTimeline, timeout);
});
