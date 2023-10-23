import { useEffect, useState } from 'react'
import * as Styled from './styles'
function App() {
  const [display, setDisplay] = useState('')
  const [newNumber, setNewNumber] = useState(true)
  const [hasDecimal, setHasDecimal] = useState(false)
  const [operator, setOperator] = useState(null)
  const [lastNum, setLastNum] = useState(null)
  const [currentOperator, setCurrentOperator] = useState("");

  const pendingOperation = operator != null

  function atualizarDisplay(num) {
    // piscaTela()
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(s => {
        if (s.length > 19) return s
        return s + num
      })
    }
  }
  const insertNum = num => atualizarDisplay(num)

  const erase = () => {
    setDisplay(s => s.slice(0, -1))
  }

  useEffect(() => {
    setHasDecimal(display.indexOf(',') != -1)
  }, [display])

  const handleDecimal = () => {
    if (!hasDecimal) {
      if (display.length > 0) {
        atualizarDisplay(',')
      } else {
        atualizarDisplay('0,')
      }
    }
  }

  const handleOperator = op => {
    /* / * - + √ */
    if (!newNumber) {
      
      // calculate()
      setNewNumber(true)
      setOperator(op)
      setLastNum(Number(display.replace(',', '.')))
      changeNameOperation(op)
    }
  }
const  changeNameOperation=(op)=>{
  
  if (op == '+') setCurrentOperator('SOMA') 
   if (op == '-')  setCurrentOperator('SUBT')
  if (op == '*')  setCurrentOperator('MULT')
   if (op == '/')  setCurrentOperator('DIVS')
}

  const calculate = () => {
    if (pendingOperation) {
      const currentNumber = Number(display.replace(',', '.'))
      setDisplay("")
      if (operator == '+') atualizarDisplay(lastNum + currentNumber)
      if (operator == '-') atualizarDisplay(lastNum - currentNumber)
      if (operator == '*') atualizarDisplay(lastNum * currentNumber)
      if (operator == '/') atualizarDisplay(lastNum / currentNumber)
    }
  }
  const clearAll=()=>{
    setDisplay('')
      setNewNumber(true)
     setHasDecimal(false)
     setOperator(null)
     setLastNum(null)
     setCurrentOperator("");
  }

  //*  MAKING KEYBOARD WORK */
  useEffect(() => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const operations = ['/', '*', '-', '+']
    const handleKeyDown = e => {
      // console.log(e.key);
      //  for num 132...
      if (numbers.indexOf(Number(e.key)) != -1) insertNum(e.key)
      // for Backspace
      if (e.key === 'Backspace') erase()
      // for handleDecimal
      if (e.key === ',') handleDecimal()
      
      //for handle operarations
      if (operations.indexOf(e.key) != -1) handleOperator(e.key)

      if (e.key === 'Enter') calculate()

    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleDecimal])
  //*  MAKING KEYBOARD WORK */

  return (
    <>
      <Styled.Container>
        <Styled.Grid>
          <div id="item-0">Felipe Lacerda</div>
          <div id="item-1">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div id="item-2-1">
            <div id="item-2" className="operationName">{currentOperator}</div>
            <div id="item-3" className={`display `}>
              {display}
            </div>
          </div>

          <button id="item-4" onClick={clearAll} className="ClearDisplay">
            ON
            <hr />
            AC
          </button>

          <Styled.minBtnTxt id="item-5" className="">
            MRC
          </Styled.minBtnTxt>
          <Styled.minBtnTxt id="item-6" className="">
            M-
          </Styled.minBtnTxt>
          <Styled.minBtnTxt id="item-7" className="">
            M+
          </Styled.minBtnTxt>
          <Styled.minBtn id="item-8" className=" cancelButton"></Styled.minBtn>
          <Styled.minBtn id="item-9" className=" cancelButton">
            &nbsp;
          </Styled.minBtn>
          <Styled.minBtn id="item-10" className=" cancelButton">
            &nbsp;
          </Styled.minBtn>

          <Styled.Button id="item-11" onClick={erase} className="backspace">
            &lt;&lt;
          </Styled.Button>
          <Styled.Button
            id="item-12"
            onClick={() => insertNum('7')}
            className="tecla7"
          >
            7
          </Styled.Button>
          <Styled.Button
            id="item-13"
            onClick={() => insertNum('4')}
            className="tecla4"
          >
            4
          </Styled.Button>
          <Styled.Button id="item-14" className="operadorRaiz  cancelButton">
            √
          </Styled.Button>
          <Styled.Button
            id="item-15"
            onClick={() => insertNum('8')}
            className="tecla8"
          >
            8
          </Styled.Button>
          <Styled.Button
            id="item-16"
            onClick={() => insertNum('5')}
            className="tecla5"
          >
            5
          </Styled.Button>
          <Styled.Button
            id="item-17"
            className="operadorPorcentagem cancelButton"
          >
            %
          </Styled.Button>
          <Styled.Button
            id="item-18"
            onClick={() => insertNum('9')}
            className="tecla9"
          >
            9
          </Styled.Button>
          <Styled.Button
            id="item-19"
            onClick={() => insertNum('6')}
            className="tecla6"
          >
            6
          </Styled.Button>
          <Styled.Button
            id="item-20"
            onClick={() => handleOperator('/')}
            className="operadorDividir"
          >
            ÷
          </Styled.Button>
          <Styled.Button
            id="item-21"
            onClick={() => handleOperator('*')}
            className="operadorMultiplicar"
          >
            X
          </Styled.Button>
          <Styled.Button
            id="item-22"
            onClick={() => handleOperator('-')}
            className="operadorSubtrair"
          >
            -
          </Styled.Button>
          <Styled.Button
            id="item-23"
            onClick={() => insertNum('1')}
            className="tecla1"
          >
            1
          </Styled.Button>
          <Styled.Button
            id="item-24"
            onClick={() => insertNum('2')}
            className="tecla2"
          >
            2
          </Styled.Button>
          <Styled.Button
            id="item-25"
            onClick={() => insertNum('3')}
            className="tecla3"
          >
            3
          </Styled.Button>
          <Styled.Button
            id="item-26"
            onClick={() => handleOperator('+')}
            className="operadorAdicionar"
          >
            +
          </Styled.Button>
          <Styled.Button
            id="item-27"
            onClick={() => insertNum('0')}
            className="tecla0"
          >
            0
          </Styled.Button>
          <Styled.Button
            id="item-28"
            onClick={handleDecimal}
            className="decimal"
          >
            ,
          </Styled.Button>
          <Styled.Button id="item-29" onClick={calculate} className="igual">
            =
          </Styled.Button>
        </Styled.Grid>
      </Styled.Container>
    </>
  )
}

export default App
