// Hide and show email sign up

$(".email-sign-up").hide();
$(".reveal-email").click(function() {
  $(".reveal-email").hide();
  $(".email-sign-up").show();
});


//// Teacher Profile Dashboard ////

// Toggle edit/complete of profile writeup
$(".teacher-profile-writeup-complete-text").hide();
$(".teacher-profile-writeup .edit-button").hide();

$(".teacher-profile-writeup .yodaa-button").click(function() {
  // show completed write-up and edit button
  $(".teacher-profile-writeup-complete-text").show();
  $(".teacher-profile-writeup .edit-button").show();
  // hide the form group
  $(".teacher-profile-writeup .form-group").hide();
});

$(".teacher-profile-writeup .edit-button").click(function() {
  $(".teacher-profile-writeup .form-group").show();
  $(".teacher-profile-writeup-complete-text").hide();
  $(".teacher-profile-writeup .edit-button").hide();
});

// Toggle edit/complete of teacher summary //
$(".teacher-summary .form-holder").hide();

$(".teacher-summary .edit-button").click(function() {
  // show form group
  $(".teacher-summary .form-holder").show();
  // hide completed version
  $(".teacher-summary .edit-button").hide();
  $(".head-section .teacher-summary .teacher-name").hide();
  $(".head-section .teacher-summary .teacher-school").hide();
  $(".head-section .teacher-summary .customer-rating").hide();
  $(".teacher-profile .contact-segment-options").hide();
});

$(".teacher-summary .form-holder .yodaa-button").click(function() {
  // hide form group
  $(".teacher-summary .form-holder").hide();
  // show the completed version
  $(".teacher-summary .edit-button").show();
  $(".head-section .teacher-summary .teacher-name").show();
  $(".head-section .teacher-summary .teacher-school").show();
  $(".head-section .teacher-summary .customer-rating").show();
  $(".teacher-profile .contact-segment-options").show();
});

// Toggle edit/complete of teacher education //
$(".teacher-education .form-holder").hide();

$(".teacher-education .edit-button").click(function() {
  // show form group
  $(".teacher-education .form-holder").show();
  // hide completed version
  $(".teacher-education .edit-button").hide();
  $(".teacher-education .teacher-education-school").hide();
});

$(".teacher-education .form-holder .yodaa-button").click(function() {
  // hide form group
  $(".teacher-education .form-holder").hide();
  // show the completed version
  $(".teacher-education .edit-button").show();
  $(".teacher-education .teacher-education-school").show();
});


// Color change of Navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// Rating-scale selection effects
$(".rating-value-holder").click(function() {
  // Give "this" bg color red, and add the rating value to a variable
  var rating = $(this).text();
  console.log(rating);
  $(this).css({"background-color":"#DDBA76", "color":"#fff", "border":"1px solid #DDBA76"});
  // Make the others bg color white
  $(this).siblings().css({"background-color":"#fff", "color":"#333", "border":"1px solid #DADBDE"});
  return rating;
});




