import React, {useState} from 'react';

import Input from '../../components/Input';

import './styles.css';

export default function FirstChallenge() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [totalLetters, setTotalLetters] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const units = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
    'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  
  const dozens = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];

  const hundreds = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

  const thousand = ['', 'mil']

  const vetores = [units, dozens, hundreds, thousand];

  function calculateLetters() {
    let currentNumber = Number(firstNumber);
    let finalNumber = Number(secondNumber);
    let allWord = '';

    if (firstNumber === '' || secondNumber === '' || isNaN(currentNumber) || isNaN(finalNumber)  || currentNumber < 0 || finalNumber > 1000 || currentNumber > finalNumber) {
      setIsCalculated(true);
      setIsInvalid(true);
      return;
    } else {
      setIsInvalid(false);
    }

    if (currentNumber === 0) {
      allWord += 'zero';
      currentNumber++;
    }

    while(currentNumber <= finalNumber) {
      let numberString = currentNumber.toString().split('').reverse();
      let sizeNumber = numberString.length;
      let wordNumbers = [];
      let count = 0;

      if (sizeNumber > 1 && numberString[1] === '1') {
        wordNumbers.push(units[Number(numberString[1] + numberString[0])]);
        count = 2;
      }

      while (count < sizeNumber) {
        if (count > 0 && Number(numberString[count-1]) !== 0) wordNumbers.push('e');
        wordNumbers.push(vetores[count][Number(numberString[count])]);
        count++;
      }

      allWord += wordNumbers.reverse().join('');
      currentNumber++;
    }
    setIsCalculated(true);
    setTotalLetters(allWord.length);
  }

  return(
    <>
      <div className="container">
        <div className="inputNumbers">
          <Input
            placeholder="Número Inicial"
            type="text"
            value={firstNumber}
            handleInput={setFirstNumber}
          />
          <Input
            placeholder="Número Final"
            type="text"
            value={secondNumber}
            handleInput={setSecondNumber}
          />
        </div>
        <button onClick={calculateLetters}>Calcular</button>
        { isCalculated &&
          <div className="totalLetters">
            { isInvalid ? 
              <p>O intervalo é inválido, selecione um intervalo entre 0 e 1000.</p> :
              <p>O número total de letras é <strong>{totalLetters}</strong></p>
            }
          </div>
        }
      </div>
    </>
  );
}