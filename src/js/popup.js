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
