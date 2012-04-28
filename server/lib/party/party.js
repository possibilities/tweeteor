HTTParty = function() {
  this.type = 'HTTParty';
};

HTTParty.prototype.get = function(url, options) {
  if (this.baseUri) {
    url = 'http://' + this.baseUri + url;
  }

  var response = Meteor.http.get(url);
  return this._getContent(response);
};

HTTParty.prototype._getContent = function(response) {
  response = JSON.parse(response.content)
  if (response.error) throw new Error(response.error);
  
  return response;
};
