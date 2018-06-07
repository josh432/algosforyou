//closure


var banana = function(){
    var count = 0;
    return function(message) {
        return function() {
            console.log(message);
            count++;
            return count;
        }
    }

}
var messageSystem = banana();
var rain = messageSystem('rain');
var snow = messageSystem('snow');
var sleet = messageSystem('sleet');
rain();
snow();
sleet();
