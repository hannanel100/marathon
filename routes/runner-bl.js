const dal = require('./dal');

function getRunner(id) {
    dal.readOne(id, function (runnerData) {

    })
}

function getRunners(callback) { 
    dal.readAll(function(err, data){
        if(err){
            callback(err);
        }
        else{
            callback(null, data);
        }
    })
}

function createRunner(runner, callback) {
    runner.createdDate = new Date;
    dal.saveOne(runner, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function updateRunner(runner) {

}

function deleteRunner(runner) {

}


module.exports.getRunners = getRunners