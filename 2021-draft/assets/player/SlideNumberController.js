var SlideNumberController = Class.create({
  initialize: function (a, b) {
    this.domNode = a;
    this.width = 120;
    this.height = 110;
    this.slideNumberLabel = document.createElement("div");
    this.slideNumberLabel.setAttribute("class", "slideNumberLabel");
    if (b) {
      this.slideNumberLabel.innerHTML = b;
    } else {
      this.slideNumberLabel.innerHTML = "Press Return to go to slide:";
    }
    this.slideNumberDigit = document.createElement("div");
    this.slideNumberDigit.setAttribute("class", "slideNumberDigit");
    this.domNode.appendChild(this.slideNumberLabel);
    this.domNode.appendChild(this.slideNumberDigit);
    this.isShowing = false;
  },
  setPosition: function (b, a) {
    this.domNode.style.left = b + "px";
    this.domNode.style.top = a + "px";
  },
  setSlideNumber: function (a) {
    this.slideNumberDigit.innerHTML = a;
  },
  show: function () {
    this.isShowing = true;
    this.domNode.style.display = "block";
    this.domNode.style.opacity = 1;
  },
  hide: function () {
    this.isShowing = false;
    this.domNode.style.display = "none";
    this.domNode.style.opacity = 0;
  },
});
var SlideNumberDisplay = Class.create({
  initialize: function (a) {
    this.domNode = a;
    this.width = 100;
    this.height = 100;
    this.slideNumberDigit = document.createElement("div");
    this.slideNumberDigit.setAttribute("class", "slideNumberDisplayDigit");
    this.domNode.appendChild(this.slideNumberDigit);
    this.isShowing = false;
  },
  setPosition: function (b, a) {
    this.domNode.style.left = b + "px";
    this.domNode.style.top = a + "px";
  },
  setSlideNumber: function (a) {
    this.slideNumberDigit.innerHTML = a;
  },
  show: function (a) {
    this.isShowing = true;
    this.domNode.style.display = "block";
    this.domNode.style.opacity = 1;
  },
  hide: function () {
    this.isShowing = false;
    this.domNode.style.display = "none";
    this.domNode.style.opacity = 0;
  },
});
