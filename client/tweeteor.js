Tweets = new Meteor.Collection('tweets');
Meteor.subscribe('tweets');

Stats = new Meteor.Collection('stats');
Meteor.subscribe('stats');

Template.public_timeline.tweets = function () {
  return Tweets.find({}).fetch();
};

var updatedAt = function() {
  var stats = Stats.findOne({ name: 'stats' });
  if (stats && stats.updatedAt) return stats.updatedAt;
};
Template.public_timeline.updatedAt = updatedAt;

var showFriendlyTime = function() {
  $('#updatedAt').text(humanized_time_span(updatedAt(), new Date));
};

Meteor.setInterval(showFriendlyTime, 1500);
