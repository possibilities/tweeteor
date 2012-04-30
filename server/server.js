var timeout = 61 * 1000;
var twitter = new Twitter();

var fetchPublicTimeline = function() {
  try {
    var timeline = twitter.publicTimeline();
    if (timeline.length > 0) Tweets.remove({});
    _.each(timeline, function(tweet) {
      tweet.created_at_stamp = new Date(tweet.created_at).getTime();
      Tweets.insert(tweet);
    });
    appInfo.set('updatedAt', new Date);
    console.log('twitter success:', (timeline && timeline.length));
  } catch (err) {
    console.log('twitter error', err);
  }
};

Meteor.startup(function() {
  runMethodEvery(fetchPublicTimeline, timeout);
});
