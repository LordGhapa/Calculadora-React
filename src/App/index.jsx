import { useEffect, useState } from 'react'
import * as Styled from './styles'
function App() {
  const [display, setDisplay] = useState('')
  const [newNumber, setNewNumber] = useState(true)
  const [hasDecimal, setHasDecimal] = useState(false)
  const [operator, setOperator] = useState(null)
  const [firstNum, setFirstNum] = useState(null)
  const [currentOperatorNameDisplay, setCurrentOperatorNameDisplay] =
    useState(null)

  const [firstCicleOperation, setFirstCicleOperation] = useState(true)

  const [ blinkEffect, setBlinkEffect] = useState(true);

const handleBlinkEffect=()=>{
  setBlinkEffect(false)
  setTimeout(() => {
    setBlinkEffect(true)
  }, 25);
}

useEffect(()=>{
  handleBlinkEffect()
},[display,operator,currentOperatorNameDisplay])
 

  function atualizarDisplay(num,refrash=false) {
    
    if (newNumber ||refrash) {
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
    setDisplay(s => String(s).slice(0, -1))
  }
// HANDLE IF DECIMAL EXISTS AND IF DISPLAY !== -
  useEffect(() => {
    setHasDecimal(String(display).indexOf('.') != -1)
    if(display===".")setDisplay("0.")
    if(display==="-")setDisplay("0")
  }, [display])

  const handleDecimal = () => {
    if (!hasDecimal) {
      if (display.length > 0) {
        atualizarDisplay('.')
      } else {
        atualizarDisplay('0.')
      }
      setHasDecimal(true)
    }
  }
// HANDLE IF DECIMAL EXISTS AND IF DISPLAY !== - */

  const handleOperator = op => {
   
      setOperator(op)
      changeNameOperation(op)
   
    if (!newNumber) {  
      setNewNumber(true)
      setFirstNum(parseFloat(display))
      setFirstCicleOperation(true)
    }
  }
  const changeNameOperation = op => {
    if (op == '+') setCurrentOperatorNameDisplay('SOMA')
    if (op == '-') setCurrentOperatorNameDisplay('SUBT')
    if (op == '*') setCurrentOperatorNameDisplay('MULT')
    if (op == '/') setCurrentOperatorNameDisplay('DIVS')
  }

  const preCalculate = () => {
  
    if (firstNum && operator) {
      let n2 = parseFloat(display)   
      calculate(firstNum, operator, n2)
    }
  }
  const calculate = (n1, op, n2) => {
  
    if (op == '+') atualizarDisplay(n1 + n2,true)
    if (op == '*') atualizarDisplay(n1 * n2,true)

    if (firstCicleOperation) {
      if (op == '-') atualizarDisplay(n1 - n2,true)
      if (op == '/') atualizarDisplay(n1 / n2,true)

      setFirstNum(n2)
      setFirstCicleOperation(false)
    } else {
      if (op == '-') atualizarDisplay(n2 - n1,true)
      if (op == '/') atualizarDisplay(n2 / n1,true)
    }
  }

  
  const clearAll = () => {
    setDisplay('')
    setNewNumber(true)
    setHasDecimal(false)
    setOperator(null)
    setFirstNum(null)
    setCurrentOperatorNameDisplay(null)
  }

  //*  MAKING KEYBOARD WORK 
  useEffect(() => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const operations = ['/', '*', '-', '+']
    const handleKeyDown = e => {
      e.preventDefault()
      // console.log(e.key);
      //  for num 132...
      if (numbers.indexOf(Number(e.key)) != -1) insertNum(e.key)
      // for Backspace
      if (e.key === 'Backspace') erase()
      // for handleDecimal
      if ((e.key === ',') | (e.key === '.')) handleDecimal()

      //for handle operations
      if (operations.indexOf(e.key) != -1) handleOperator(e.key)

      if (e.key === 'Enter') preCalculate()   
    
      if (e.key === 'Escape')clearAll()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleDecimal])
  //*  MAKING KEYBOARD WORK */

  return (// CAPAZ QUE PODERIA TER CRIADO UM MAP PARA COLOCA OS BOTÕES MAS ACHEI MAIS FÁCIL DE ENTENDER ASSIM
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
      { blinkEffect?    <div id="item-2-1">
            <div id="item-2" className="operationName">
              {currentOperatorNameDisplay}
            </div>
            <div id="item-3" className={`display `}>
              {display}
            </div>
          </div>:""}

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
          <Styled.minBtn id="item-9" className=" cancelButton"></Styled.minBtn>
          <Styled.minBtn id="item-10" className=" cancelButton"></Styled.minBtn>

          <Styled.Button id="item-11" onClick={erase} className="backspace">
            &lt;&lt;
          </Styled.Button>
          <Styled.Button
            id="item-12"
            onClick={() => insertNum('7')}
       
          >
            7
          </Styled.Button>
          <Styled.Button
            id="item-13"
            onClick={() => insertNum('4')}
           
          >
            4
          </Styled.Button>
          <Styled.Button id="item-14" className="operadorRaiz  cancelButton">
            √
          </Styled.Button>
          <Styled.Button
            id="item-15"
            onClick={() => insertNum('8')}
        
          >
            8
          </Styled.Button>
          <Styled.Button
            id="item-16"
            onClick={() => insertNum('5')}
          
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
    
          >
            9
          </Styled.Button>
          <Styled.Button
            id="item-19"
            onClick={() => insertNum('6')}
           
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
           
          >
            1
          </Styled.Button>
          <Styled.Button
            id="item-24"
            onClick={() => insertNum('2')}
           
          >
            2
          </Styled.Button>
          <Styled.Button
            id="item-25"
            onClick={() => insertNum('3')}
           
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
          <Styled.Button id="item-29" onClick={preCalculate} className="igual">
            =
          </Styled.Button>
        </Styled.Grid>
      </Styled.Container>
    </>
  )
}

export default App
