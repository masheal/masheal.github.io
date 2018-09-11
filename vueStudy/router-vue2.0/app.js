const express = require('express');
const server = express();

server.listen(1208);

server.use('/main', (req, res) => {
    // if (req.query.id == '1234') {
    //     res.send({ data: 'One' })
    // } else if (req.query.id == '5678') {
    //     res.send({ data: 'Five' })
    // }
    console.log(req.query.id)
})

server.use(express.static('./'));