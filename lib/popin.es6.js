 class Popin {
  constructor(options) {
    this.triggerElements = document.querySelectorAll(options.triggerElements);
    this.overlay         = document.querySelector(options.overlay ? options.overlay : '.overlay');
    this.currentPopin    = null;
    this.closeElements   = document.querySelectorAll(options.closeElements ? options.closeElements : '.popin-close-button')
    this.closeHTML       = options.closeHTML;
    this.bind();
  }

  bind() {
    [].forEach.call(this.triggerElements, element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        this.show(e);
      }, false);
    });

    [].forEach.call(this.closeElements, element => {

      if (this.closeHTML) {
        element.innerHTML = this.closeHTML;
      }

      element.addEventListener('click', (e) => {
        e.preventDefault();
        this.hide();
      }, false);
    });

    this.overlay.addEventListener('click', (e) => {
      this.hide();
    }, false);
  }

  show(e) {
    var target = e.target.getAttribute('data-target');
    this.popin  = this.popin ? this.popin : document.getElementById(target);

    this.popin.classList.add('popin--visible');
    this.showOverlay();
  }

  hide() {
    this.hideOverlay();
    this.popin.classList.remove('popin--visible');
  }

  showOverlay() {
    this.overlay.classList.add('overlay--visible');
  }

  hideOverlay() {
    this.overlay.classList.remove('overlay--visible');
  }
}

module.exports = Popin;