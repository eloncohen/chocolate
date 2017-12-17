(function (global) {
  global.$C = function( selector ) {
    return new ChocolateJS( selector );
  }

  var ChocolateJS = function(selector){
      this.elements = [];
      if (selector === undefined) {
        console.error("Please provide a selector");
        return;
      }
      var firstChar = selector.charAt(0);
      var restOfString = selector.slice(1);
      if (firstChar === '#') {
        this.elements.push(document.getElementById(restOfString));
      }else if (firstChar === '.') {
        this.elements = document.getElementsByClassName(restOfString);
      }else{
        this.elements = document.getElementsByTagName(selector);
      }
    }

    ChocolateJS.prototype.attr = function(name, value){
      for(var i = 0; i < this.elements.length ; i++){
       this.elements[i].setAttribute(name, value)
      }
      return this;
    }

    ChocolateJS.prototype.html = function (html) {
          for(var i = 0; i < this.elements.length ; i++){
            this.elements[i].innerHTML = html;
          }
          return this;
    };

    ChocolateJS.prototype.click = function (clickAction) {  
      for(var i = 0; i < this.elements.length ; i++){
        this.elements[i].addEventListener("click",clickAction);
      }
      return this;
    };
})(window);