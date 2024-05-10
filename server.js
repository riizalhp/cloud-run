const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
	res.sendFile(_dirname + '/src/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
