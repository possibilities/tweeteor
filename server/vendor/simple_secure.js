SimpleSecure = {
  noDataMagic: function() {
    var isDataRoute;
    var writeDataMatch = /\/\w*\/(insert|update|remove)$/i;
    _.each(Meteor.default_server.method_handlers, function(method, route) {
      isDataRoute = writeDataMatch.test(route);
      Meteor.default_server.method_handlers[route] = function() {};
    });
  }
};
