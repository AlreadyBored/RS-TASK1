class JqueryImplement {
  constructor() {
    this.root = document.createElement("div");
    document.body.append(this.root);
  }

  $(selector) {
    const root = document.querySelector(selector);
    this.root = root;
    return this;
  }

  addClass(name) {

  }

  removeClass(name) {

  }

  hasClass(name) {
  }

  append(item) {

  }

  html(text) {
    this.root.innerHTML = text;
    return this;
  }

  attr(name, value = null) {
    if (value) {
      this.root.setAttribute(name, value);
      return this;
    }
    return this.root.getAttribute(name);
  }

  empty() {
    this.root.innerHTML = "";
  }

  children() {    
    this.root = this.root.childNodes;
    return this;
  }

  css(style) {
    this.root.style = style;
    return this;
  }

  on(event, func) {
    this.root.addEventListener(event, func);
  }

  one(event, func) {
    this.root.addEventListener(event, func, { once: true });
    return this;
  }

  each(func) {
    this.root.forEach(func);
  }
}

module.exports = JqueryImplement;