const express = require("express")
const app = express()

app.get("/vidTest", (req, res) => {
    const referer = req.headers.referer;
        
    if(referer && referer.includes("localhost")){
        res.sendFile(__dirname + "/public/vidTest.mp4");
    } else {
        res.sendStatus(403).send("forbidden access.");
    }
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000)