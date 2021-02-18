const express = require("express");
const app = express();
const path = require("path");

// Vamos a usar como motor de vistas -> EJS
app.set ('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '/public') ));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const indexRouter = require('./routers/routerIndex');

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})