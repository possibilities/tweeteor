AppInfo = function() {
  this.query = { name: 'appData' };
  this.modifier = {};
  this.info = AppData.find(this.query);

  if (this.info.count() === 0) {
    AppData.insert(this.query);
  }
};

AppInfo.prototype.get = function(name) {
  this.info.rewind();
  if (this.info.count() === 0) return;

  var info = this.info.fetch()[0];
  if (info) return info[name];
};

AppInfo.prototype.set = function(name, value) {
  var modifier = _.clone(this.modifier);
  modifier[name] = value;
  AppData.update(this.query, { $set: modifier });
};
