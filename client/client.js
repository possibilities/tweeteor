// Template methods

Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Template.public_timeline.updatedAt = function() {
  return timeFix(appInfo.get('updatedAt'));
};

Template.public_timeline.moof = function() {
  return Session.get('moof');
};

// Template helpers

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  var time = new Date(dateString);
  return humanized_time_span(dateString);
});

// Tools & tricks

var timeFix = function(time) {
  // meteor.com server time drifts into the future
  // for now don't mess with times from the future
  if (new Date(time) >= new Date) time = new Date;
  return time;
};

var showFriendlyTime = function() {
  var updatedAtDate = $('#updatedAt').attr('data-updated-at');
  $('#updatedAt').text(humanized_time_span(updatedAtDate));
};

// Reoccuring

Meteor.setInterval(showFriendlyTime, 5000);
