const JqueryImplement = require('../src/index.js');
const { assert, expect } = require('chai');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");
global.window = window;
global.document = window.document;

describe("0. $() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();  

  it("a) method should be defined", () => {
    assert.isDefined(_.$, "method must be defined");
  });

  it("b) select element", () => {
    _.$("body");
    expect(_.root !== null).to.be.true;
  });
});

describe("1. addClass() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();  

  it("a) method should be defined", () => {
    assert.isDefined(_.addClass, "method must be defined");
  });

  it("b) add class", () => {
    _.addClass("test");
    expect(_.root.classList.contains("test")).to.be.true;
  });
});

describe("2. removeClass() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();
  

  it("a) method should be defined", () => {
    assert.isDefined(_.removeClass, "method must be defined");
  });

  it("b) remove class", () => {
    _.root.classList.add("test");
    const hasClass = _.root.classList.contains("test");
    _.removeClass("test");
    const delClass = _.root.classList.contains("test");
    expect(hasClass == true && delClass == false).to.be.true;
  });
});

describe("3. hasClass() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();

  it("a) method should be defined", () => {
    assert.isDefined(_.hasClass, "method must be defined");
  });

  it("b) test class exist", () => {
    _.root.classList.add("testClass");
    expect(_.hasClass("testClass")).to.be.true;
  });
});

describe("4. append() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();

  it("a) method should be defined", () => {
    assert.isDefined(_.append, "method must be defined");
  });

  it("b) append child as html element", () => {
    _.append(document.createElement("nav"));
    expect(_.root.querySelector("nav") !== null).to.be.true;
  });

  it("c) append child as string", () => {
    _.append(`<div class='test'></div>`);
    expect(_.root.querySelector(".test") !== null).to.be.true;
  });
});

describe("5. html() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();

  it("a) method should be defined", () => {
    assert.isDefined(_.html, "method must be defined");
  });

  it("b) Insert text", () => {
    _.html(`test`);
    expect(_.root.textContent === "test").to.be.true;
  });
});

describe("6. attr() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();
  
  _.attr("id", "root-id");

  it("a) method should be defined", () => {
    assert.isDefined(_.attr, "method must be defined");
  });

  it("b) Set attribute", () => {
    expect(_.root.hasAttribute("id")).to.be.true;
  });

  it("c) Get attribute", () => {
    expect(_.attr("id") === "root-id").to.be.true;
  });
});

describe("7. empty() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();

  it("a) method should be defined", () => {
    assert.isDefined(_.html, "method must be defined");
  });

  it("b) test childs", () => {
    _.empty();
    expect(_.root.childNodes.length === 0).to.be.true;
  });
});

describe("8. children() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement(); 

  _.root.appendChild(document.createElement("div"));
  _.root.appendChild(document.createElement("div"));
  _.children();

  it("a) method should be defined", () => {
    assert.isDefined(_.children, "method must be defined");
  });

  it("b) Get children", () => {
    expect(_.root.length === 2).to.be.true;
  });
});

describe("9. css() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();
  
  _.css("color:red");

  it("a) method should be defined", () => {
    assert.isDefined(_.css, "method must be defined");
  });

  it("b) add style to element", () => {
    expect(_.root.getAttribute("style") !== null).to.be.true;
  });
});

describe("10. on() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();  

  _.on("click", () => (_.root.innerHTML += "click"));
  _.root.click();
  _.root.click();

  it("a) method should be defined", () => {
    assert.isDefined(_.on, "method must be defined");
  });

  it("b) event testing", () => {
    expect(_.root.textContent === "clickclick").to.be.true;
  });
});

describe("11. one() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();
  

  _.one("click", () => (_.root.innerHTML += "click"));
  _.root.click();
  _.root.click();

  it("a) method should be defined", () => {
    assert.isDefined(_.one, "method must be defined");
  });

  it("b) event testing", () => {
    expect(_.root.textContent === "click").to.be.true;
  });
});

describe("12. each() method testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();
  

  it("a) method should be defined", () => {
    assert.isDefined(_.each, "method must be defined");
  });
});

describe("13. chaining testing", () => {
  document.body.innerHTML = '';
  const _ = new JqueryImplement();  

  let clickTest = false;

  _.append(document.createElement("nav"))
    .$("nav")
    .addClass("nav-el")
    .html("Example text")
    .css("background: red")
    .attr("test", "test")
    .on("click", () => clickTest = false);
  _.root.click();

  const tst1 = document.querySelector("nav") !== null;
  const tst2 = _.root.tagName == "NAV";
  const tst3 = _.root.classList.contains("nav-el");
  const tst4 = _.root.textContent === "Example text";
  const tst5 = _.root.style.background === "red";
  const tst6 = _.root.getAttribute("test") === "test";
  const tst7 = clickTest === true;

  it("b) chain test", () => {
    expect(tst1 && tst2 && tst3 && tst4 && tst5 && tst6 && tst7).to.be.true;
  });
});
