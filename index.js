const express = require('express')
const app = express()
const cors = require('cors')
const teams = require('./data')
const PORT = process.env.PORT || 4000




app.use(cors())

app.get('https://vast-lime-dolphin-ring.cyclic.app/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res) => {
    res.json(teams)
})

//to get the whole team
app.get('/api/:name', (req, res) => {
    const teamName = req.params.name.toLowerCase().slice(1)
    const obj = teams.find(element => element.teamname === teamName)
    const unknown = teams.find(element => element.teamname === 'unknown')
    !obj ? res.json(unknown) : res.json(obj)
})


//to get a specific player on a team
app.get('/api/:name/:pos', (req,res) => {
    const teamName = req.params.name.toLowerCase().slice(1)
    const position = req.params.pos.toLowerCase().slice(1)
    const unknown = teams.find(element => element.teamname === 'unknown')
    const obj = teams.find(element => element.teamname === teamName)
    if(!obj) res.json(unknown)
    switch(position){
        case 'pg': 
            res.json(obj.pg)
            break;
        case 'sg': 
            res.json(obj.sg)
            break;
        case 'sf':
            res.json(obj.sf)
            break;
        case 'pf': 
            res.json(obj.pf)
            break;
        case 'c': 
            res.json(obj.c)
            break;
        case 'sixth':
            res.json(obj.sixthMan)
        default:
            res.json(unknown)
    }
    
})




app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})

