const firebase = require('firebase');
var AuthConfig = require('./authConfig')

class RealtimeClient {
    constructor() {
        var config = AuthConfig.config;
        firebase.initializeApp(config);
        this.database = firebase.database();
    }

    async push(data) {
        this.database.ref('users/').set(data);
    }

}

module.exports = new RealtimeClient();