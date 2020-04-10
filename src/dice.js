module.exports = {
    getRandomInt: function(min, max) {
        let result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    }
}