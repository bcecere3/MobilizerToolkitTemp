/**
 * Created by Brendan on 6/12/2018.
 */
require('dotenv').config();
const jsforce             = require('jsforce');
const port              = process.env.PORT || 4000;
const express           = require("express");
const bodyParser        = require('body-parser');
const helmet            = require('helmet');
const cors              = require('cors');
let isLoggedIn = false;
let emailInput = "";
let conn = new jsforce.Connection();
const emailList = [{ email: "brendancecere@gmail.com"}, {email: 'jwilliams@execvision.io'}];
const app = express();
app.use(helmet());
app.use(require('sanitize').middleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('sanitize').middleware);
//app.use(express.static( `${__dirname}/client/build/` ) );

//app.get('*', (req, res)=>{
    //res.send("working!");
    //res.sendFile(path.join(__dirname, '/client/build/index.html'));
//});

app.post('/isLoggedIn', function (req, res) {
    console.log(isLoggedIn);
    res.send(isLoggedIn);
});
app.post('/validateEmail', function (req,res) {
    emailList.forEach(function (e) {
        console.log(req.body.input);
       if(req.body.input === e.email){
           console.log(req.body.input);
           isLoggedIn = true;
       }
    });
    console.log("log "+isLoggedIn);
    res.send(isLoggedIn);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));