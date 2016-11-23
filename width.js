var $ = function (what) {
  return document.getElementById(what);
};

function handle(what) {
  var t = fullw(what.value);
  $("dis").innerHTML = t.replace(/\n/g, "\n<br>\n");
}

function fullw(str) {
    var code, uchr, ustr;
    var out = "";
    for (var i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (code > 31 && code < 127) {
        if (code == 32) {
          uchr = 0x3000;
        } else {
          uchr = 0xFEE0 + code;
        }
        ustr = "" + eval("'\\u" + uchr.toString(16) + "'");
        out += ustr;
      } else {
        out += str.charAt(i);
      }
    }
    return out;
  }
