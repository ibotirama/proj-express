const newClient = (req, res) => {
    res.send('Fullstack master - Clients new')
}

const list = (req, res) => {
    res.send('Fullstack master - Clients list')
}

module.exports = {
    newClient, list
}