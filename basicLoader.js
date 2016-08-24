/**
 *
 */
var basicLoader = {

  show : function() {
    if (!document.getElementById("basicLoader")) {
      this._construct();
    }
  },   

  hide : function() {
    // Change opacity to hide the div, and at the end of the animation the div will be destroyed
    document.getElementById("basicLoader") && (document.getElementById("basicLoader").style.opacity = 0);  
  },    

  _construct : function() {

    var html = '<div id="basicLoader" class="mainLoader"><div style="margin-top: 20%;"><div class="loader"></div></div></div>';

    this._appendHtml(document.body || document.documentElement, html);
    this._appendCss();

    var element = document.getElementById("basicLoader");
    element.addEventListener("transitionend", this._destroy, false);

  },

  _appendHtml : function(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;    
    el.appendChild(div.firstChild);
  },

  _appendCss : function() {
    var css = '.mainLoader{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,1);z-index:999999;opacity:1;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.loader,.loader:after,.loader:before{background:#fff;-webkit-animation:load1 1s infinite ease-in-out;animation:load1 1s infinite ease-in-out;width:1em;height:4em}.loader:after,.loader:before{position:absolute;top:0;content:""}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader{color:#fff;text-indent:-9999em;margin:88px auto;position:relative;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  },

  _destroy : function() {
    document.getElementById("basicLoader") && document.getElementById("basicLoader").remove();
  }

};
