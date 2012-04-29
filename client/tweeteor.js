Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Template.public_timeline.updatedAt = function() {
  return appInfo.get('updatedAt');
};

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  var time = new Date(dateString);
  // meteor.com server time drifts into the future
  // for now don't mess with times from the future
  if (time > new Date) time = new Date;
  return humanized_time_span(new Date(dateString));
});

var showFriendlyTime = function() {
  var updatedAtDate = $('#updatedAt').attr('data-updated-at');
  $('#updatedAt').text(humanized_time_span(updatedAtDate));
};

Meteor.setInterval(showFriendlyTime, 5000);
