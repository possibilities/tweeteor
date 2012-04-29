// just a setInterval that runs the method once before kicking things off
var runMethodEvery = function(func, timeout) {
  func();
  func.runId = func.runId || Meteor.setInterval(func, timeout);
};
