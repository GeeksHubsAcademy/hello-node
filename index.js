const express = require('express');
const fs = require('fs/promises'); // es de node, no es una librería
const app = express()

app.get('/characters', async(req, res) => {
    try {
        const characters = await fs.readFile('characters.json', {
            encoding: 'utf8'
        })
        res.send(JSON.parse(characters))
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Sorry, there was a problem trying to get the characters' })
    }
})
app.get('/about', (req, res) => res.send('esto es about'));
app.listen(3000, () => console.log('server running on port 3000'))