const clientsController = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
    it('create a new client', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Fullstack master - Clients new')
        clientsController.newClient({}, res)
    })
    it('list all clients', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Fullstack master - Clients list')
        clientsController.list({}, res)
    })
})