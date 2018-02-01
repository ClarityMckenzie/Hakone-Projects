
// move doc.ready to encapsulate all other script

$(document).ready(function() {
// hide-reveal section header functionality

  var experimentsIsOpen = false;

  var pageTitle = $('#title-text');

  pageTitle.addClass('move-box');
  //
  // pageTitle.animate({opacity: 1, left: "100px"}, 1000);

  $('#intro').hide();

  $('#exp-placeholder').hide();

  $('#ram-1').hide();

  $("#introductions").click(function() {
    $('#intro').slideToggle('fast');
  });

  $("#experiments").click(function() {
    $('#exp-placeholder').slideToggle('fast');
      var counter = 0;
      var intervalId = window.setInterval(function() {
        var header = $('.row > h2');

        console.log('THINGS ARE HAPPENING!!!!');
        header.append('.');
        counter++;

        if (counter > 3) {
          header.text('Hypothesizing');
          counter = 0;
        }

      }, 500);



/* stop interval from running

    experimentsIsOpen = !experimentsIsOpen;

    console.log('EXPERIMENTS IS OPEN?', experimentsIsOpen);

    if(!experimentsIsOpen) {
      clearInterval(intervalId);
      intervalId = 0;
    }

*/
  });

  $("#ramblings").click(function() {
    $('#ram-1').slideToggle('fast');
  });


  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyB3vZhU2rsZBiU46EK6TmxzcLh8NswxGaY",
    authDomain: "hakp-ef752.firebaseapp.com",
    databaseURL: "https://hakp-ef752.firebaseio.com",
    projectId: "hakp-ef752",
    storageBucket: "hakp-ef752.appspot.com",
    messagingSenderId: "720860637676"
  };

  firebase.initializeApp(config);

  // Reference message collection

  var messagesRef = firebase.database().ref('messages');

  //listen for submit
  document.getElementById('comment-form').addEventListener('submit', submitForm);

  // submit form

  function submitForm (e) {
    e.preventDefault();

  //get values
  var message = getInputVal('message');


  saveMessage(message);
  document.getElementById('comment-form').reset();

    }
  // function to get message values
  function getInputVal(id){
  return document.getElementById(id).value;
  }
  // save messages

  function saveMessage(message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      message: message,
    });

  }
  // Robson map

  function initMap() {
         var robson = {lat: 49.285, lng: -123.125};
         var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 15,
           center: robson,
           styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]

         });
         var marker = new google.maps.Marker({
           position: robson,
           map: map });
        }

// Fuji slideshow

var fujiIndex = 1;
var navigators = $('#fuji-slideshow-container > a');

for(var i = 0; i < navigators.length; i++) {
  navigators[i].addEventListener('click', function() {
    plusFujis(1);
  });
}

  showFujis(fujiIndex);

  var ball1 = $('#fuji-balls-container > #ball1');
  var ball2 = $('#fuji-balls-container > #ball2');
  var ball3 = $('#fuji-balls-container > #ball3');
  var ball4 = $('#fuji-balls-container > #ball4');

  var el = document.getElementById('#some');

  ball1.click(function() {
    currentFuji(1);
  });

  ball2.click(function() {
    currentFuji(2);
  });

  ball3.click(function() {
    currentFuji(3);
  });

  ball4.click(function() {
    currentFuji(4);
  });

  function plusFujis(n) {
    showFujis(fujiIndex += n);
  }

  function currentFuji(n) {
    showFujis(fujiIndex = n);
  }

  function showFujis(n) {
    var i;
    var fujis = document.getElementsByClassName("myFujis");
    var balls = document.getElementsByClassName("ball");
    if (n > fujis.length) {
      fujiIndex = 1
    }
    if (n < 1) {
      fujiIndex = fujis.length
    }
    for (i = 0; i < fujis.length; i++) {
      fujis[i].style.display = "none";
    }
    for (i = 0; i < balls.length; i++) {
      balls[i].className = balls[i].className.replace(" active", "");
    }
    fujis[fujiIndex - 1].style.display = "block";
    balls[fujiIndex - 1].className += " active";
  }


      // Udon Slideshow

      var udonIndex = 1;
      showUdons(udonIndex);

      function plusUdons(n) {
        showUdons(udonIndex += n);
      }

      function currentUdon(n) {
        showUdons(udonIndex = n);
      }

      function showUdons(n) {
        var i;
        var udons = document.getElementsByClassName("myUdons");
        var circles = document.getElementsByClassName("circle");
        if (n > udons.length) {
          udonIndex = 1
        }
        if (n < 1) {
          udonIndex = udons.length
        }
        for (i = 0; i < udons.length; i++) {
          udons[i].style.display = "none";
        }
        for (i = 0; i < circles.length; i++) {
          circles[i].className = circles[i].className.replace(" active", "");
        }
        udons[udonIndex - 1].style.display = "block";
        circles[udonIndex - 1].className += " active";
      }

      // Muji Slideshow

      var mujiIndex = 1;
      showMujis(mujiIndex);

      function plusMujis(n) {
        showMujis(mujiIndex += n);
      }

      function currentMuji(n) {
        showMujis(mujiIndex = n);
      }

      function showMujis(n) {
        var i;
        var mujis = document.getElementsByClassName("myMujis");
        var dots = document.getElementsByClassName("dot");
        if (n > mujis.length) {
          mujiIndex = 1
        }
        if (n < 1) {
          mujiIndex = muji.length
        }
        for (i = 0; i < mujis.length; i++) {
          mujis[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        mujis[mujiIndex - 1].style.display = "block";
        dots[mujiIndex - 1].className += " active";
      }

      // What I use to study Japanese

      var wiutsjIndex = 1;
      showWiutsjs(wiutsjIndex);

      function plusWiutsjs(n) {
        showWiutsjs(wiutsjIndex += n);
      }

      function currentWiutsj(n) {
        showWiutsjs(wiutsjIndex = n);
      }

      function showWiutsjs(n) {
        var i;
        var wiutsjs = document.getElementsByClassName("myWiutsjs");
        var rounds = document.getElementsByClassName("round");
        if (n > wiutsjs.length) {
          wiutsjIndex = 1
        }
        if (n < 1) {
          wiutsjIndex = wiutsj.length
        }
        for (i = 0; i < wiutsjs.length; i++) {
          wiutsjs[i].style.display = "none";
        }
        for (i = 0; i < rounds.length; i++) {
          rounds[i].className = rounds[i].className.replace(" active", "");
        }
        wiutsjs[wiutsjIndex - 1].style.display = "block";
        rounds[wiutsjIndex - 1].className += " active";
      }

      // scroll-to-top arrow functionality

      $('#up-nav').hide();

      $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
          $("#up-nav").fadeIn();
        }
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() < 200) {
          $("#up-nav").fadeOut();
        }
      });
});
