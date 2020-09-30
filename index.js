const express = require('express');
const fs = require('fs').promises; // es de node, no es una librería
const app = express()

app.use(express.json()); //sin estos req.body es undefined
app.get('/characters', async(req, res) => {
    try {
        const characters = await fs.readFile('characters.json', 'utf8')
        res.send(JSON.parse(characters))
    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: 'Sorry, there was a problem trying to get the characters'
        })
    }
})

app.post('/characters', (req, res) => {
    fs.readFile('characters.json', 'utf-8')
        .then(rawValues => JSON.parse(rawValues))
        .then(values => {
            const characters = values.results;
            characters.push(req.body);
            return fs.writeFile('characters.json', JSON.stringify(values), null, 4)

        })
        .then(() => res.status(201).send({ message: 'Character successfully created' }))
})

app.listen(3000, () => console.log('server running on port 3000'))