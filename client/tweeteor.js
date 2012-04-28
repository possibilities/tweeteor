var showFriendlyTime = function() {
  var updatedAtDate = $('#updatedAt').attr('data-updated-at');
  $('#updatedAt').text(humanized_time_span(updatedAtDate));
};

Meteor.setInterval(showFriendlyTime, 5000);
