Template.public_timeline.tweets = function () {
  var tweets = Tweets.find({}).fetch();
  return tweets;
};

Template.public_timeline.updatedAt = function() {
  return appInfo.get('updatedAt');
};

Handlebars.registerHelper('timeAgoFormat', function(dateString) {
  return humanized_time_span(new Date(dateString));
});

var showFriendlyTime = function() {
  var updatedAtDate = $('#updatedAt').attr('data-updated-at');
  $('#updatedAt').text(humanized_time_span(updatedAtDate));
};

Meteor.setInterval(showFriendlyTime, 5000);
