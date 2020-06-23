
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 


function validatePhone(tel) {
    var phoneNumber = document.getElementById(tel).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if (filter.test(phoneNumber)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(credit) {
    var creditNum = document.getElementById(credit).value;
    var filter = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;

    if (filter.test(creditNum)) {
        return true;
    }
    else {
        return false;
    }
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#tel").on("change", function(){
        if (!validatePhone("tel")){
            alert("Wrong format for phone number.");
            event.preventDefault()
            event.stopPropagation()
            $("#tel").val("(xxx) xxx-xxxx");
        }
    });

    $("#cc-number").on("change", function(){
        if (!validateCredit("cc-number")){
            alert("Wrong format for credit card number");
            event.preventDefault()
            event.stopPropagation()
            $("#tel").val("xxxx xxxx xxxx xxxx");
        }
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
          console.log(forms);
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

  // Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

// var date = ["2020-06-14","2018-10-1","2017-10-26"];


// function disableDates(date) {
   
//     var string = jQuery.datepicker.formateDate('yyyy-mm-dd',date);
//     return [dates.indexOf(string) == -1];
// }


//     // $("#date").datepicker();
//     // 

//     $("#dateInput").datepicker({
//                 dateFormat: 'yyyy-mm-dd',
//                 autoclose: true,
//                 weekStart: 1,
//                 calendarWeeks: true,
//                 todayHighlight: true,
//                beforeShowDay: disableDates
//     });

    // // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // // To use a different theme you must include its css in your HTML file. 
    // // The one I included in my HTML is the Excite Bike, but you can try others

    // // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    // $( "#dateInput" ).datepicker(
    //     {
    //         dateFormat: 'yyyy-mm-dd',
    //         // no calendar before June 1rst 2020
    //         minDate: new Date('2020-06-01'),  
    //         maxDate: '+4M',
    //         // used to disable some dates
    //         beforeShowDay: $.datepicker.noWeekends,
    //         beforeShowDay: disableDates,
    //         datesDisabled: disableDates(),
    //     }   
    // );


    // // Look at the different events on which an action can be performed
    // // https://www.w3schools.com/jquery/jquery_events.asp
    // // Here, we put 
    // $("#debit").on("mouseenter", function(){
    //     $("#debit").addClass("showInput");
    // });

    // $("#debit").on("mouseleave", function(){
    //     $("#debit").removeClass("showInput");
    // });
$("#cc-number").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#cc-cvv").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#cc-name").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });