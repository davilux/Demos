let messageBoard = {
    incoming : [],
    outgoing : []
}

function sendMessage(message){
    messageBoard.outgoing.push(message)
    return message
}

const receiveMessage = function(message){
    messageBoard.incoming.push(message)
    return message
}


console.log(sendMessage('hello world'))

//logs the whole function
//console.log(sendMessage)