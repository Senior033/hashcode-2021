const fs = require("fs");
const path = require("path");

class ScoreCard {
    _maxTime;
    _finishPoints;
    _score = 0;
    constructor(maxTime, finishPoints) {
        this._maxTime = maxTime;
    }

    carReachesDestination(time) {
        if(time >= this._maxTime) {
            _score += (finishPoints + maxTime - finishPoints);
        }
    }

    finish() {

    }
}


function printFile() {

}

