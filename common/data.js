// Setup databases

Tweets = new Meteor.Collection('tweets');
AppData = new Meteor.Collection('appData');

// Tools & tricks

var appInfo = new AppInfo;

// Publish server data to client

if (Meteor.is_server) {
  Meteor.publish('tweets', function () {
    return Tweets.find({}, { sort: { created_at_stamp: -1 }, limit: 20 });
  });
  
  Meteor.publish('appData', function () {
    return AppData.find({});
  });
  
  SimpleSecure.noDataMagic();
}

// Setup client data subscriptions on server

if (Meteor.is_client) {
  Meteor.subscribe('tweets');
  Meteor.subscribe('appData');
}
