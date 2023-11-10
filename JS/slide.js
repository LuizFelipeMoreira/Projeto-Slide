export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStartt(event) {
    event.preventDefault();
    console.log(this);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStartt.bind(this);
  }

  init() {
    this.addSlideEvents();
    return this;
  }
}
