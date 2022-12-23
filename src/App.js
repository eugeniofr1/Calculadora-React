
import Input from './Components/Input'
import Button from './Components/Button'

import { Container, Content, Row, Title } from './styles';
import { useState } from 'react';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
    setOperation('')
    
  }

  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '': prev}${number}` )
  }
  

  const handleSumNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('x')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handlePercentNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('%')
      }else{
        const sum = (Number(firstNumber) / 100 * Number(currentNumber)).toFixed(2);
        
        setCurrentNumber(String(sum))
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
        case '%':
          handlePercentNumbers();
          break;
        default: break;
      }
    }
  }
  return (
    
    <Container>
      
      <Content>
        <Title>Calculator</Title>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="%" onClick={handlePercentNumbers}/>
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
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
