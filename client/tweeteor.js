Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Template.public_timeline.updatedAt = function() {
  return appInfo.get('updatedAt');
};

var timeFix = function(time) {
  // meteor.com server time drifts into the future
  // for now don't mess with times from the future
  if (new Date(time) > new Date) time = new Date;
  return time;
};

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  var time = timeFix(new Date(dateString));
  return humanized_time_span(dateString);
});

var showFriendlyTime = function() {
  var updatedAtDate = $('#updatedAt').attr('data-updated-at');
  $('#updatedAt').text(humanized_time_span(timeFix(updatedAtDate)));
};

Meteor.setInterval(showFriendlyTime, 5000);
