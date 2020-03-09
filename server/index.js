const app = require('./app');


let port = process.env.PORT;
if (port == '' || port == undefined) {
  port = 4000;
}

app.listen(port, () => console.log('listening...'));
