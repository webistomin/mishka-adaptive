function initMap() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        scrollwheel: false,
        center: new google.maps.LatLng(59.9388218, 30.3230753),
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var image = './img/icon-map-pin.svg';
    var myLatLng = new google.maps.LatLng(59.9388218, 30.3230753);
    var mishkaMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggler');
navMain.classList.remove('main-navigation--nojs');
navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-navigation--closed')) {
        navMain.classList.remove('main-navigation--closed');
        navMain.classList.add('main-navigation--opened');
    } else {
        navMain.classList.add('main-navigation--closed');
        navMain.classList.remove('main-navigation--opened');
    }
});

var modal = document.querySelector(".popup-offer");
var overlay = document.querySelector(".overlay");

if (document.querySelector(".week-offer__btn")) {
  var button = document.querySelector(".week-offer__btn");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("popup-offer--show");
  });
}

else if (document.querySelector(".catalog__item-cart")) {
  var buttons = document.querySelectorAll('.catalog__item-cart');
  for (var i = 0; i < buttons.length; i++) {
    var self = buttons[i];
    self.addEventListener('click', function (event) {
      event.preventDefault();
      overlay.classList.add("overlay--show");
      modal.classList.add("popup-offer--show");
    }, false);
  }
}

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }
  if (modal.classList.contains("popup-offer--show")) {
    modal.classList.remove("popup-offer--show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }
    if (modal.classList.contains("popup-offer--show")) {
      modal.classList.remove("popup-offer--show");
    }
  }
});
