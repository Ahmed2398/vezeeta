// Stars review Page 

$(document).ready(function(){
    $("#s1").click(function(){
      $(".fa-star").css("color,black")
      $("#s1").css("color","yellow");
    });
    $("#s2").click(function(){
      $(".fa-star").css("color,black")
      $("#s1,#s2").css("color","yellow");
    });
    $("#s3").click(function(){
      $(".fa-star").css("color,black")
      $("#s1,#s2,#s3").css("color","yellow");
    });
    $("#s4").click(function(){
      $(".fa-star").css("color,black")
      $("#s1,#s2,#s3,#s4").css("color","yellow");
    });
    $("#s5").click(function(){
      $(".fa-star").css("color,black")
      $("#s1,#s2,#s3,#s4,#s5").css("color","yellow");
    });
  });

// END


 // FAQ Page 

  var acc = document.getElementsByClassName(" btn-link");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var card = this.nextElementSibling;
      if (card.style.display === "none") {
        
       
      } 
    });
  }

  // END

  // Detail page Calender 
  
  $(function($) {
    $( document ).bind( "enhance", function(){
        $( "body" ).addClass( "enhanced" );
    });

    $( document ).trigger( "enhance" );
});
    

$(function () {

  $('#example').calendar();

});
$(function () {
  $('#example').calendar({
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  });
});

$(function () {
  $('#example').calendar({
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  });
});

$(function () {
  $('#example').calendar({
    color: '#e74e84',
  });
});

$(function () {
  $('#example').calendar({
    onSelect: function (event) {
      $('.ahmed').text(event.label);
    }
  });
});

    