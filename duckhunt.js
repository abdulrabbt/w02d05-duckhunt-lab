$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var $body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck".

  /* var $duck = $('<div/>').addClass("duck");
  $body.append($duck); */
  

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second).

 /*  setInterval(function(){
    $('img').toggle();
  }, 250); */

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left".
  /* $duck.css({
    'top' : '50px',
    'left' : '200px'
  }); */

  // 4. Try making the duck move to a different location after 1 second.

  /* $duck.animate({
    'top' : '180px',
    'left' : '400px'
  }, 1000); */


  // 5. Congratulations!.

  // 5. ——— Part 2: Here we go! —— 
// 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
// called createDuck that "returns" the duck object.

  function createDuck(){

      var $duck = $('<div/>').addClass('duck');
      $body.append($duck);


      setInterval(function(){
          $('img').toggle();
      }, 250);

      
      topRandom = Math.floor( Math.random() * window.innerHeight );
      leftRandom = Math.floor( Math.random() * window.innerWidth );


      $duck.css({
          'top' : `${topRandom}px`,
          'left' : `${leftRandom}px`
        });

      setInterval(function() {
          $duck.css("top", Math.random() * window.innerHeight);
          $duck.css("left", Math.random() * window.innerWidth);
      }, 1000)  
      

      
      $duck.animate({
          'top' : `${topRandom}px`,
          'left' : `${leftRandom}px`
      }, 1000);  


      $('.duck').click(function(){
          $(this).remove();
          checkForWinner();
      });

      function checkForWinner(){
          if ($body.children().length == 0){
              alert("YOU WIN!");
          };
      };

      

      
      return $duck;

  };

  for ( var i = 0; i <5; i++){
      createDuck();
  }


// 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
//    using our fancy new createDuck() function.

// 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
// each time it creates a duck, it appears in a random location.

// 8b. The ducks should also move to a random location after 1 second
// HINT: Use Math.random() * window.innerWidth    for "left"
//       And Math.random() * window.innerHeight   for "top"

// 9. Our ducks are going to be easy targets if they only move once.
//    Modify createDuck() so the ducks keep moving around!

// 10. Well Done! 
})
