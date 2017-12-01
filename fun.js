$(document).ready(function() {

  // Title Page =============================================

  setTimeout(function(){
    // fade and slide in bg
    $("#title-screen #left").css("flex", "1").animate({ opacity: 1 }, { duration: 2000 });
    $("#title-screen #right").animate({ opacity: 1 }, { duration: 2000 });
  }, 1000);

  $(window).scroll(function(){
    // fade out intro screen
    $("#title-screen").css("opacity", 1 - $(window).scrollTop() / 600);
  });

  // Resume Page =============================================

  var mainCanvas = document.querySelector("#myCanvas");
  var mainContext = mainCanvas.getContext("2d");

  var canvasWidth = mainCanvas.width;
  var canvasHeight = mainCanvas.height;

  function drawCircle() {

  }
  drawCircle();


});

// slide in images on second page
