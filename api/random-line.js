const https = require('https');

module.exports = async function (req, res) {
  const fileUrl = "https://gist.githubusercontent.com/casssssh0le/457a353bd79e3934dfe318dafcefe6d4/raw/82b7582c1a8089c5a966a5cb2f3edae45740a72b/moods";

  https.get(fileUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const lines = data.split('\n').
