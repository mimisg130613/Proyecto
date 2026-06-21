const express = require('express');
const app = express();

app.get("/blog", function(req, res) {
    return res.json({ Mensaje:"Saludo desde NodeJS al blog"})
})

app.listen(3000, function() {
console.log('Mi servidor de node');
})

