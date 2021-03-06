const express = require('express');

const app = express();

app.use(express.static('./public'));

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
