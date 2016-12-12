$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/CoreyP.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response: ', response.courses.completed);
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {
      //append course to parent div (badges)
      var $course = $('<div />', { 'class': 'course' }).appendTo(badges);

      //append title
      $('<h3 />', { text: course.title }).appendTo($course);

      //append image
      $('<img />', { src: course.badge }).appendTo($course);

      //append button
      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    });

  }

});
