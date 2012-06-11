/*
 * CSS

[tabindex=0] {
  background:yellow
}
[tabindex]:before {
  content:attr(tabindex);
  color:red;
  font-weight:bold
}
[role] {
  background:rgba(255,191,202,0.4)
}
[role]:before {
  content:attr(role);
  color:green;
  font-weight:bold
}
[role=grid] {
	background-color:rgba(255,167,0,0.3);
}
[role=row] {
	border: 1px solid rgba(0,0,0,0.5);
}
[role=gridcell] {
 background-color:rgba(255,0,0,0.3);
}

*/

// TODO: Add a legend and color code rows and gridcells

(function (document) {
  'use strict';
  
  var css = '[tabindex=0]{background:yellow}[tabindex]:before{content:attr(tabindex);color:red;font-weight:bold}[role]{background:rgba(255,191,202,0.4)}[role]:before{content:attr(role); color:green;font-weight:bold}[role=grid]{background-color:rgba(255,167,0,0.3);}[role=row]{border: 1px solid rgba(0,0,0,0.5);}[role=gridcell]{background-color:rgba(255,0,0,0.3);}';
  var styleElem = document.getElementById('aria-highlighter');
    
  if (styleElem) {
    styleElem.disabled = !styleElem.disabled;
  } else {
    styleElem = document.createElement('style');
    styleElem.id = 'aria-highlighter';
    styleElem.type = 'text/css';
      
    if (styleElem.styleSheet) {
      styleElem.styleSheet.cssText = css;
    } else {
      styleElem.appendChild(document.createTextNode(css));
    }
      
    document.getElementsByTagName('head')[0].appendChild(styleElem);
  }
})(document);
