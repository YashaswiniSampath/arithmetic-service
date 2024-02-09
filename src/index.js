const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
app.get('/add/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);
    const sum = number1 + number2;
    
    res.json({ result: sum });
});

app.get('/calculate/:num1/:num2/:operator', (req, res) => {
    const number1 = parseFloat(req.params.num1);
    const number2 = parseFloat(req.params.num2);
    const operator = operator;
    const result=0;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    res.json({ result: sum });
});

app.get('/',(req,res)=>{
    res.send('Arithmetic service-Hello World!');
});



app.listen(port)