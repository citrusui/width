const who = what => document.getElementById(what);
function handle(what) {
  const t = fullw(what.value);
  who("dis").innerHTML = t.replace(/\n/g, "<br>");
}
function fullw(str) {
  let code;
  let uchr;
  let ustr;
  let out = "";
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (code > 31 && code < 127) {
      if (code == 32) {
        uchr = 0x3000;
      } else {
        uchr = 0xFEE0 + code;
      }
      ustr = `${eval("'\\u" + uchr.toString(16) + "'")}`;
      out += ustr;
    } else {
      out += str.charAt(i);
    }
  }
  return out;
}
