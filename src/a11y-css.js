/*
 * CSS

[tabindex="0"] {
  background:yellow
}
[tabindex]:before {
  content:attr(tabindex);
  color:red;
  font-weight:bold
}
[role] {
  background:pink
}
[role]:before {
  content:attr(role);
  color:green;
  font-weight:bold
}

*/

(function (document) {
  'use strict';
  
  var css = '[tabindex="0"]{background:yellow}[tabindex]:before{content:attr(tabindex);color:red;font-weight:bold}[role]{background:pink}[role]:before{content:attr(role); color:green;font-weight:bold}';
  var styleElem = document.getElementById('a11y-css-highlight');
    
  if (styleElem) {
    styleElem.disabled = !styleElem.disabled;
  } else {
    styleElem = document.createElement('style');
    styleElem.id = 'a11y-css-highlight';
    styleElem.type = 'text/css';
      
    if (styleElem.styleSheet) {
      styleElem.styleSheet.cssText = css;
    } else {
      styleElem.appendChild(document.createTextNode(css));
    }
      
    document.getElementsByTagName('head')[0].appendChild(styleElem);
  }
})(document);
