Meteor.subscribe('tweets');
Meteor.subscribe('stats');

Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  return humanized_time_span(new Date(dateString));
});

var updatedAt = function() {
  var stats = Stats.findOne({ name: 'stats' });
  if (stats && stats.updatedAt) {
    return new Date(stats.updatedAt);
  }
};
Template.public_timeline.updatedAt = updatedAt;

var showFriendlyTime = function() {
  var updatedAtDate = new Date(updatedAt());
  $('#updatedAt').text(humanized_time_span(updatedAtDate));
};

Meteor.setInterval(showFriendlyTime, 1500);
