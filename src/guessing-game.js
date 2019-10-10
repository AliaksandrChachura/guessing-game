class GuessingGame {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        let result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
            this.result = Math.round((this.min + this.max) / 2);
            return this.result;
    }
    lower() {        
        this.max = Math.round((this.min + this.max)/2);
    }

    greater() {
        this.min = Math.round((this.min + this.max)/2);
    }
}

module.exports = GuessingGame;
