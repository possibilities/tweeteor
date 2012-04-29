Twitter = function(options) {
  if (options) _.extend(this, options);
  this.baseUri = 'twitter.com';
};
_.extend(Twitter.prototype, HTTParty.prototype);

Twitter.prototype.publicTimeline = function() {
  var response = this.get('/statuses/public_timeline.json');
  return response;
};
