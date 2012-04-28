# party

Aping some of Ruby's fun HTTP library HTTParty.

## Use the class methods to get down to business quickly

    var http = new HTTParty;
    var response = http.get('http://twitter.com/statuses/public_timeline.json');
    console.log(response.content, response.statusCode, response.headers);

## Or wrap things up in your own class

    # Set it up
    Twitter = function(options) {
      if (options) _.extend(this, options);
      this.baseUri = 'twitter.com';
    };
    Twitter.prototype = HTTParty.prototype;

    Twitter.prototype.publicTimeline = function() {
      return this.get('/statuses/public_timeline.json');
    };

    # Use it
    var twitter = new Twitter();

    var loadPublicTimeline = function() {
      var timeline = twitter.publicTimeline();
      _.each(timeline, function(tweet) {
        Tweets.insert(tweet);
      });
    };
