const RealtimeClient = require('./realtimeClient');

const data = {
    "user2" : {
        "uuid" : " ",
        "status" : "pending",
        "meta" : "{ }"
    }
}

// const push = async() => {
//     RealtimeClient.push(data);
// }

RealtimeClient.push(data);