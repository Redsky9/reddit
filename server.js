let express = require('express');
let bP = require('body-parser');
const PORT = process.env.PORT || 5000;

let app = express();
// CONFIG
app.set('view engine', 'ejs');
app.use(bP.urlencoded({extended: true}));
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.send({status: "ok"});
});

// LISTEN
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});