// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// const port = 3000;
// app.get('/add/:number1/:number2', (req, res) => {
//     const number1 = parseFloat(req.params.number1);
//     const number2 = parseFloat(req.params.number2);
//     const sum = number1 + number2;
    
//     res.json({ result: sum });
// });

// app.get('/calculate/:num1/:num2/:operator', (req, res) => {
//     const number1 = parseFloat(req.params.num1);
//     const number2 = parseFloat(req.params.num2);
//     const operator = operator;
//     const result=0;
//     switch(operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     res.json({ result: sum });
// });

// app.get('/',(req,res)=>{
//     res.send('Arithmetic service-Hello World!');
// });



// app.listen(port)

const express = require('express');
const cors = require('cors');
const app = express();
const { add } = require("./arithmetica");
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
})

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1) || 0;
    const num2 = parseFloat(req.query.num2) || 0;
    const sum = add(num1, num2);

    res.json({result:sum});
})

app.listen(port);