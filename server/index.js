const express = require('express');
const connectDBs = require('./db/connection');
const web=require('./routes/web');
var cors = require('cors');
const bodyParser = require('body-parser');

const app=express()
const port=process.env.PORT || '8000'





// db connection

connectDBs();




const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};


app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static( "server/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/theme",web);
app.use("/admin",web);
app.use("/admin/login",web);
app.use("/img",web);


// var jQueryScript = document.createElement('link');
// jQueryScript.setAttribute('rel', 'stylesheet');
// jQueryScript.setAttribute('href', './public/css/custom.css');
// document.head.appendChild(jQueryScript);





app.listen(port,()=>{
  
  console.log(`Server is listening at http://localhost:${port}`)
})









// const express = require('express');
// const app = express();
// var cors = require('cors');
// const bodyParser = require('body-parser');
// const port = 8000;
// var fs = require('fs');
// const uuid = require('uuid');
// const mysql=require ('mysql')
// const conn=mysql.createConnection({
//     user : 'root',
//     host : 'localhost',
//     password : '',
//     database : 'ghl_customizer'

// });

// const corsOpts = {
//   origin: '*',

//   methods: [
//     'GET',
//     'POST',
//   ],
//   allowedHeaders: [
//     'Content-Type',
//   ],
// };


// app.use(cors(corsOpts));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


// app.post('/selectedtheme', async (req, res) => {


//     console.log(req.body);

//     const theme_id=req.body.selected_theme;
//     const loc_id=req.body.loc_id;

//     res.send(req.body);


  
// });

// app.listen(port, () => {
//   console.log(`app listening on port ${port}!`);
// });