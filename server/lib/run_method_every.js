var runMethodEvery = function(func, timeout) {
  func();
  func.runId = func.runId || Meteor.setInterval(func, timeout);
};
