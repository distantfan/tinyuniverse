 $(function(){
  $('#contactbutton, #contactbutton-top').click(function(event) {

      $("#contact-form-container").fadeIn(2000, function() {

      });
  });

  $(".fa-times").click(function(event) {
    $("#contact-form-container").slideUp('500', function() {

    });
  });

  $("#socialbutton").click(function(event) {
    $("#social-slidedown").slideDown('1500', function() {

    });
  });

  // Form validation

  $("form[name='contactform']").validate({
   // Specify validation rules
   rules: {
     // The key name on the left side is the name attribute
     // of an input field. Validation rules are defined
     // on the right side
     firstname: "required",
     lastname: "required",
     email: {
       required: true,
       // Specify that email should be validated
       // by the built-in "email" rule
       email: true
     },
     password: {
       required: true,
       minlength: 5
     }
   },
   // Specify validation error messages
   messages: {
     firstname: "Please enter your firstname",
     lastname: "Please enter your lastname",
     password: {
       required: "Please provide a password",
       minlength: "Your password must be at least 5 characters long"
     },
     email: "Please enter a valid email address"
   },
   errorElement: 'div',
   errorLabelContainer : '.errorTxt',
   // Make sure the form is submitted to the destination defined
   // in the "action" attribute of the form when valid
   submitHandler: function(form) {
     form.submit();
   }
 });


});
