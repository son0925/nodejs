const path = require('path');

function postHtml(req,res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "coding.jpeg"));
}

module.exports = postHtml;