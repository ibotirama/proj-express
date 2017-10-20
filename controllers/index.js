const home = (req, res) => {
    res.send('Fullstack master')
}

const page1 =  (req, res) => {
    res.send('Fullstack master')
}

const calc = (req, res) => {
    if(req.query.num1 && req.query.num2) {
        const {num1, num2} = req.query
        const sum = parseFloat(num1) + parseFloat(num2)
        res.send(`The sum is : ${sum}`)
    }
    else{
        res.send('Calculator')
    }
}

const even = (req, res) => {
    const isEven = (req.params.num % 2) === 0
    if (isEven){
        res.send(`It is Even: ${req.params.num}`)
    }
    else {
        res.send(`It is Odd: ${req.params.num}`)
    }
}

module.exports = {
    home, page1, calc, even
}
