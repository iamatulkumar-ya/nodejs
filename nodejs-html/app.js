
const  express  = require("express");
const path = require('path');
const router = express.Router();

app = express();


router.get('/', function(res,req){ 
    res.render(index);
});


app.use('/', router);
app.listen(3000, function() {
    console.log('Running on port ' + 3000);
  })
  
  