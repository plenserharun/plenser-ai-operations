const axios = require('axios');

async function sendNotification(topic, message) {
  await axios.post(`https://ntfy.sh/${topic}`, message);
}

module.exports = sendNotification;
