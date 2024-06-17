import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setcurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleClear = () =>{
    setcurrentNumber('0')    
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setcurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber)); 
      setcurrentNumber('0')    
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setcurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber)); 
      setcurrentNumber('0')    
      setOperation('-')
    } else {
      const rem = Number(firstNumber) - Number(currentNumber)
      setcurrentNumber(String(rem))
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber)); 
      setcurrentNumber('0')    
      setOperation('x')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setcurrentNumber(String(mult))
      setOperation('')
    }

  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber)); 
      setcurrentNumber('0')    
      setOperation('/')
    } else {
      const divi = Number(firstNumber) * Number(currentNumber)
      setcurrentNumber(String(divi))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultNumbers();
            break;
            case '/':
              handleDivNumbers();
              break;
          default: break;
      }    
    } 
    
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultNumbers}/>
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="c"onClick={handleClear}/>
          <Button label="." />          
        </Row>  
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>          
        </Row>  
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>          
        </Row>  
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>          
        </Row>
              
      </Content>      
    </Container>
  )
}
export default App;
