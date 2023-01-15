const fs = require('fs');
const final= fs.readFileSync("http://localhost:3000/layouts/admin/toolapp/pages/newtool/slidercomponents/Storeoffer.jsx");

final= file.toString();
console.log(final);
// res.send('final');


 const queryString = window.location.search;

 const urlParams = new URLSearchParams(queryString);
 
 const id = urlParams.get('id');

var jQueryScript = document.createElement('link');
jQueryScript.setAttribute('rel', 'stylesheet');
jQueryScript.setAttribute('href', 'http://127.0.0.1:5502/server/public/css/custom.css');
document.head.appendChild(jQueryScript);
