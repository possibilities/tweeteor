Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Template.public_timeline.updatedAt = function() {
  var stats = Stats.findOne({ name: 'stats' });
  if (stats && stats.updatedAt) {
    return new Date(stats.updatedAt);
  }
};

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  return humanized_time_span(new Date(dateString));
});
