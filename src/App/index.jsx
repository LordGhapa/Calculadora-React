import * as Styled from './styles';
function App() {
  return (
    <>
    <Styled.Fundo>

     <Styled.Container >
     <Styled.Grid>
          <div id="item-0">Felipe Lacerda</div>
          <div id="item-1"><span>|</span><span>|</span><span>|</span></div>
          <div id="item-2-1">
            <div id="item-2"></div>
            <div id="item-3" className="display"></div>
          </div>

          <button id="item-4" className="ClearDisplay">
            ON
            <hr />
            AC
          </button>

          <Styled.minBtnTxt id="item-5" className="">MRC</Styled.minBtnTxt>
          <Styled.minBtnTxt id="item-6" className="">M-</Styled.minBtnTxt>
          <Styled.minBtnTxt id="item-7" className="">M+</Styled.minBtnTxt>
          <Styled.minBtn id="item-8" className=" cancelButton"></Styled.minBtn>
          <Styled.minBtn id="item-9" className=" cancelButton">&nbsp;</Styled.minBtn>
          <Styled.minBtn id="item-10" className=" cancelButton">&nbsp;</Styled.minBtn>

       
<Styled.Button id="item-11" className="backspace">&lt;&lt;</Styled.Button>
          <Styled.Button id="item-12" className="tecla7">7</Styled.Button>
          <Styled.Button id="item-13" className="tecla4">4</Styled.Button>
          <Styled.Button id="item-14" className="operadorRaiz">√</Styled.Button>
          <Styled.Button id="item-15" className="tecla8">8</Styled.Button>
          <Styled.Button id="item-16" className="tecla5">5</Styled.Button>
          <Styled.Button id="item-17" className="operadorPorcentagem cancelButton">
            %
          </Styled.Button>
          <Styled.Button id="item-18" className="tecla9">9</Styled.Button>
          <Styled.Button id="item-19" className="tecla6">6</Styled.Button>
          <Styled.Button id="item-20" className="operadorDividir">÷</Styled.Button>
          <Styled.Button id="item-21" className="operadorMultiplicar">X</Styled.Button>
          <Styled.Button id="item-22" className="operadorSubitrair">-</Styled.Button>
          <Styled.Button id="item-23" className="tecla1">1</Styled.Button>
          <Styled.Button id="item-24" className="tecla2">2</Styled.Button>
          <Styled.Button id="item-25" className="tecla3">3</Styled.Button>
          <Styled.Button id="item-26" className="operadorAdicionar">+</Styled.Button>
          <Styled.Button id="item-27" className="tecla0">0</Styled.Button>
          <Styled.Button id="item-28" className="decimal">,</Styled.Button>
          <Styled.Button id="item-29" className="igual">=</Styled.Button>
        </Styled.Grid>
     </Styled.Container>
    </Styled.Fundo>
    </>
  )
}

export default App
