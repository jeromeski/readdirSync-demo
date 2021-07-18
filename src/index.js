const express = require('express');
const { readdirSync } = require('fs');

const app = express();


readdirSync('./src/routes').map((r) => {
  console.log(r)
  return app.use('/api', require('./routes/' + r));
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
