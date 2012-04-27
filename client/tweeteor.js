Tweets = new Meteor.Collection('tweets');
Meteor.subscribe('tweets');

Template.public_timeline.tweets = function () {
  var tweets =  Tweets.find({});
  return tweets;
};

Template.public_timeline.updated_at = function() {
  return 'TODO';
};
