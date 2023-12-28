const express = require('express');
const router = express.Router();



// API endpoint to perform the calculation and store the result
router.post('/calculate', (req, res) => {
  const { operand1, operand2, operator } = req.body;
    
  if (isNaN(operand1) || isNaN(operand2)) {
    return res.status(400).json({ error: 'Operands must be numbers' });
  }
let result;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        result = 0;
    }
  
    // Sending back the result as JSON
    res.json({ result });
  
});



module.exports = router;
