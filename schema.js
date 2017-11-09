var Parse = require('parse/node');

Parse.initialize("myAppID");
Parse.serverURL = 'https://jrc-parse-server.herokuapp.com/parse';

module.exports = function initializeSchema(){
	var GameScore = Parse.Object.extend("GameScore");
	var gameScore = new GameScore();

	gameScore.set("score", 1337);
	gameScore.set("playerName", "Sean Plott");
	gameScore.set("cheatMode", false);

	gameScore.save(null, {
	  success: function(gameScore) {
	    // Execute any logic that should take place after the object is saved.
	    console.log('New object created with objectId: ' + gameScore.id);
	  },
	  error: function(gameScore, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    console.log('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

