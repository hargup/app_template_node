const messages = [];

const getMessages = (callback) => {
    callback(null, messages);
}

const addMessage = (message, callback) => {
    messages.push(message);
    callback(null);
}

module.exports = {
    getMessages,
    addMessage
}