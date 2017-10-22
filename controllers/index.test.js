const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
    it('home', ()=>{
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Fullstack master')
        indexController.home({}, res)
    })
    it('handles without num1 and num2 params', ()=>{
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Calculator')
        indexController.calc({query: {}}, res)
    })
    it('calcs', ()=>{
        let res = {
            send: function(){}
        }
        let req = {
            num1: 10,
            num2: 20
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs(`The sum is : 30`)
        indexController.calc({query: {num1: req.num1, num2: req.num2}}, res)
    })
})
