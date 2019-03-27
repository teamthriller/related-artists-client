const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
console.log(__dirname)
app.use(express.static(__dirname+'/../public'))