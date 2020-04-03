('use strict');

///////////////import the express function from the npm library\\\\\\\\\\\\\\\

const express = require('express');

//////////////initialize or calling the function\\\\\\\\\\\\

const app = express();

//////////////////////create a port number\\\\\\\\\\\\\\\\\\\\\

let PORT = process.env.PORT || 3000 ;

/////////////////////access my files inside the public folder\\\\\\\\\\\\\\\\\\\\

app.use(express.static('./public'))

//////////////////////listen for calling\\\\\\\\\\\\\\\\\\\\\

app.listen(PORT, () =>{
    console.log('listening ...');
    
})



