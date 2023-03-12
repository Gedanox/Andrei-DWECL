const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyparser = require('body-parser');
const child_process = require("child_process");
var jokes = "";

const app = express();

var test = "";

fetch('https://official-joke-api.appspot.com/jokes/ten')
    .then((response) => response.json())
    .then((data) => jokes = data);

//jokes = '[{"type":"general","setup":"Did you hear about the runner who was criticized?","punchline":"He just took it in stride","id":94},{"type":"programming","setup":"An IPv6 packet is walking out of the house.","punchline":"He goes nowhere.","id":374},{"type":"general","setup":"When is a door not a door?","punchline":"When it\'s ajar.","id":287},{"type":"general","setup":"What do you give to a lemon in need?","punchline":"Lemonaid.","id":75},{"type":"programming","setup":"There are 10 types of people in this world...","punchline":"Those who understand binary and those who don\'t","id":29},{"type":"general","setup":"Who did the wizard marry?","punchline":"His ghoul-friend","id":301},{"type":"general","setup":"What\'s the best time to go to the dentist?","punchline":"Tooth hurty.","id":11},{"type":"general","setup":"How come a man driving a train got struck by lightning?","punchline":"He was a good conductor.","id":115},{"type":"general","setup":"Where was the Declaration of Independence signed?","punchline":"At the bottom! ","id":298},{"type":"general","setup":"Want to hear my pizza joke?","punchline":"Never mind, it\'s too cheesy.","id":154}]';

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get('/translated', (req, res) => {
    test = JSON.stringify(jokes);
    console.log(test);
    let workerProcess = child_process.exec(`python pyscript.py ${test}`,
        function (error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: ' + error.code);
                console.log('Signal received: ' + error.signal);
            }
            //console.log(jokes);
            console.log('stdout: ' + stdout);
            res.json({ data: stdout });
        });
    workerProcess.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    });
});

app.get('/nontranslated', (req, res) => {
    res.json({ data: jokes });
});