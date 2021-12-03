### Custom JQuery

---
⚠️ DO NOT SUBMIT PRS WITH SOLUTIONS TO THIS REPO ⚠️

### Description

Your task is to implement minimal version of JQuery `JqueryImplement` class using DOM API

#### Methods:

##### `$(selector)`
this method returns the first Element within the document that matches the specified selector.

##### `addClass(className)`
this method should add a class of styles for the element

##### `removeClass(className)`
this method should remove a class of styles for the element

##### `hasClass(className)`
this method should return a boolean value, whether the element has such a class

##### `append(element)`
this method should insert an element into parent

##### `html(text)`
this method should insert text into parent

##### `attr(attr, value?)`
this method should set an attribute to the element (if 2 arguments are passed) or get an attribute of the element (if 1 argument is passed)
##### `empty()`
this method should remove all child nodes of the set of matched elements from the DOM.

##### `children()`
this method should get all children

##### `css(style)`
this method should add html style to the element

##### `on(event, func)`
this method should sets up a function that will be called whenever the specified event is delivered to the target.

##### `one(event, func)`
this method should sets up a function that will be called whenever the specified event is delivered to the element. After that must remove this handler from the element

##### `each()`
this method should this method must iterate over the nodelist

##### `Chaining testing`
As a result, you should write a chain of calls to the class method.

### Example usage
```javascript

    new JqueryImplement().append(document.createElement("nav"))
    .$("nav")
    .addClass("nav-class")
    .html("Example text")
    .css("background: red")
    .attr("id", "test")
    .on("click", () => alert('click works));

```


  

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/rolling-scopes-school/custom-jquery/
3. Clone your newly created repo: https://github.com/<%your_github_username%>/custom-jquery/  
4. Go to folder `custom-jquery`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` in command line or you can run tests in browser with `npm start`
7. You will see the number of passing and failing tests. 100% of passing tests is equal to 100p in score  

---

### Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Open `RS APP` and click `Auto Test`
3. Select your task (custom-jquery)
4. Press the submit button and enjoy

### Notes
1. We recommend you to use nodejs of version 14 or lower. If you using any of features that does not supported by node v10, score won't be submitted.