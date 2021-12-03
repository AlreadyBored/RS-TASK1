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
    this.root.classList.add(name);
    return this;
  }

  removeClass(name) {
    this.root.classList.remove(name);
    return this;
  }

  hasClass(name) {
    if (this.root.classList.contains(name)) return true;
  }

  append(item) {
    if (typeof item === "string") {
      this.root.innerHTML += item;
    } else {
      this.root.append(item);
    }
    return this;
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