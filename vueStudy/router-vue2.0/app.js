const express = require('express');
const server = express();

server.listen(1208);
server.use('/main', (req, res) => {
    console.log(req.query);
    if (req.query.id == '1234') {
        res.send({
            ok: 1,
            data: 'one'
        })
    } else if (req.query.id == '5678') {
        res.send({
            ok: 1,
            data: 'five'
        })
    }
});

server.use(express.static('./'));