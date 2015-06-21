 class Popin {
  constructor(options) {
    this.triggerElements = document.querySelectorAll(options.triggerElements);
    this.overlay         = document.querySelector(options.overlay ? options.overlay : '.overlay');
    this.currentPopin    = null;
    this.closeElements   = document.querySelectorAll(options.closeElements ? options.closeElements : '.popin-close-button')
    this.closeHTML       = options.closeHTML;
    this.content         = options.content;

    this.overlay ? '' : this.createOverlay();
    this.bind();
  }

  bind() {
    [].forEach.call(this.triggerElements, element => {
      
      if (this.content) {
        var target = document.getElementById(element.getAttribute('data-target'));

        target.innerHTML = this.content;
      }

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

  createOverlay() {
    console.log(this.overlay);
    var overlay = document.createElement('div');
    overlay.className = 'overlay';

    this.overlay = overlay;
    document.body.appendChild(overlay);
  }
}

module.exports = Popin;