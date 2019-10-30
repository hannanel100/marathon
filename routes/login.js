var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('login');
})

/* Post runner. */
router.post('/', function (req, res, next) {
    let isOk = true;
    const runner = req.body;
    console.log(req);
    /* validation & logic about runner objects */
    if (res.password !== 'abc') {
        isOk = false;
    }
    /* end validation & logic about runner objects */

    if (isOk) {
        res.redirect('runners');
    } else {
        res.render('error', { title: 'Express' });
    }

});


module.exports = router;
