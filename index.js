const express = require('express');
const app = express();
const port = 3000;
const moose = require('mongoose');

mongoose.connect("mongodb+srv://omarbakr:vb79YrvOKCdcaSPM@cluster0.x9fieox.mongodb.net/?appName=Cluster0").then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   });

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
