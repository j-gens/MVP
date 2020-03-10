const app = require('./app.js');


let port = process.env.PORT;
if (port == '' || port == undefined) {
  port = 3100;
}

app.listen(port, () => console.log('listening...'));
