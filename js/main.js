(function() {

  var documentElem = $(document),
      nav = $('.navbar'),
      navContainer = $('.navCon')
      lastScrollTop = 0;

  //navbar scroll effect
  documentElem.on('scroll', function(){
    var currentScrollTop = $(this).scrollTop();

    //scroll down it hides, scroll up it shows itself
    if( currentScrollTop > lastScrollTop ){
      nav.addClass('hideNav');
    }
    else {
      nav.removeClass('hideNav');
    };

    lastScrollTop = currentScrollTop;
  }) //end scroll function

  //run functions once page is ready
  $( document ).ready(function() {
    var twist = document.getElementById('twist'),
        horizontalWidth = $(this).width();

    randomColor = function() {
      setInterval(function(){ 
        twist.style.color = getRandomColor(); 
      }, 2500);
    }

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    } 
    randomColor();

        var horizontalWidth = $(this).width();
   // add or remove container on screen size
    if( horizontalWidth > 1350){
      navContainer.addClass('container');
    }
    else {
      navContainer.removeClass('container');
    };
  });// end ready function

  $(window).resize(function() {
    var horizontalWidth = $(this).width();
   // add or remove container on screen size
    if( horizontalWidth > 1350){
      navContainer.addClass('container');
    }
    else {
      navContainer.removeClass('container');
    };
  });

  //instagram gallery using instafeed.js
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'balloomineers',
    clientId: '087db4d9aaa849a693e46570fcbac639',
    sortBY: 'most-liked',
    resolution: 'low_resolution',
    limit: 4,
    template: '<li class="instaPic"><a href="{{link}}"><img src="{{image}}"/></a><img class="like" src="images/like.png"/><p>{{model.likes.count}}</p><img class="comment" src="images/comment.png"/><p id="cp">{{model.comments.count}}</p></li>'
  });
  feed.run();


})(); // end function