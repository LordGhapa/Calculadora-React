import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: grid;
  justify-content: center;
  align-content: center;

  padding: 10px;
  background: rgb(0, 0, 0);
  border-radius: 10px;

  transform: scale(1.5);
`

export const Grid = styled.div`
  button {
    color: white;
    border-radius: 5px;
    width: 33px;
  }
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 0px;
  height: 100%;

  #item-0 {
    grid-row-start: 1;
    grid-column-start: 3;

    grid-row-end: 2;
    grid-column-end: 5;
    color: rgb(255, 255, 255);
    font-size: 12px;
    line-height: 200%;
  }
  #item-1 {
    background-color: #473838;
    border-radius: 2px;
    display: flex;
    justify-content: space-around;

    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 3;
    color: rgb(162, 162, 162);
    height: 20px;
    width: 75px;
    box-shadow: 0px 0px 0px 2px #232323;
  }
  #item-2-1 {
    grid-row-start: 2;
    grid-column-start: 1;
    position: absolute;
    background: #6fb17b;
    width: 220px;
    display: flex;
    flex-direction: row;
    text-align: right;
    height: 25px;
    border-radius: 10px;
  }
  #item-2 {
    background-color: #6ecc69;
    color: #2e502e;
    grid-row-start: 2;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;
    width: 50px;
    font-size: 10px;
    border-radius: 10px 0px 0px 10px;
    padding: 2px;
  }
  #item-3 {
    background-color: #6ecc69;
    color: #2e502e;
    grid-row-start: 2;
    grid-column-start: 2;
    padding: 2px;
    grid-row-end: 3;
    grid-column-end: 5;
    width: 100%;
    border-radius: 0px 10px 10px 0px;
  }

  #item-4 {
    background-color: #e22f68;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-column-end: 2;
    border-radius: 50%;
    font-size: 14px;
    padding: 0px 14px;
    height: 50px;
    width: 50px;
    transform: scale(0.8);
    margin-left: 4px;
  }
  #item-5 {
    color: white;
    grid-row-start: 3;
    grid-column-start: 2;

    grid-row-end: 4;
    grid-column-end: 3;
    text-align: center;
  }
  #item-6 {
    color: white;
    grid-row-start: 3;
    grid-column-start: 3;

    grid-row-end: 4;
    grid-column-end: 4;
    text-align: center;
  }
  #item-7 {
    color: white;
    text-align: center;
    grid-row-start: 3;
    grid-column-start: 4;

    grid-row-end: 4;
    grid-column-end: 5;
  }
  #item-8 {
    grid-row-start: 4;
    grid-column-start: 4;

    grid-row-end: 5;
    grid-column-end: 5;
  }
  #item-9 {
    grid-row-start: 4;
    grid-column-start: 3;

    grid-row-end: 5;
    grid-column-end: 4;
  }
  #item-10 {
    display: block;

    grid-row-start: 4;
    grid-column-start: 2;

    grid-row-end: 5;
    grid-column-end: 3;
  }
  #item-11 {
    background-color: #577b7e;
    grid-row-start: 5;
    grid-column-start: 1;

    grid-row-end: 6;
    grid-column-end: 2;
  }
  #item-12 {
    background-color: #596b56;
    grid-row-start: 6;
    grid-column-start: 1;

    grid-row-end: 7;
    grid-column-end: 2;
  }
  #item-13 {
    background-color: #59f997;
    grid-row-start: 7;
    grid-column-start: 1;

    grid-row-end: 8;
    grid-column-end: 2;
  }
  #item-14 {
    background-color: #fbab79;
    grid-row-start: 5;
    grid-column-start: 2;

    grid-row-end: 6;
    grid-column-end: 3;
  }
  #item-15 {
    background-color: #afe967;
    grid-row-start: 6;
    grid-column-start: 2;

    grid-row-end: 7;
    grid-column-end: 3;
  }
  #item-16 {
    background-color: #9bf87b;
    grid-row-start: 7;
    grid-column-start: 2;

    grid-row-end: 8;
    grid-column-end: 3;
  }
  #item-17 {
    background-color: #55d5d7;
    grid-row-start: 5;
    grid-column-start: 3;

    grid-row-end: 6;
    grid-column-end: 4;
  }
  #item-18 {
    background-color: #5ad9dc;
    grid-row-start: 6;
    grid-column-start: 3;

    grid-row-end: 7;
    grid-column-end: 4;
  }
  #item-19 {
    background-color: #d5f577;
    grid-row-start: 7;
    grid-column-start: 3;

    grid-row-end: 8;
    grid-column-end: 4;
  }
  #item-20 {
    background-color: #dac9bd;
    grid-row-start: 5;
    grid-column-start: 4;

    grid-row-end: 6;
    grid-column-end: 5;
  }
  #item-21 {
    background-color: #ce5a5c;
    grid-row-start: 6;
    grid-column-start: 4;

    grid-row-end: 7;
    grid-column-end: 5;
  }
  #item-22 {
    background-color: #9ca557;
    grid-row-start: 7;
    grid-column-start: 4;

    grid-row-end: 8;
    grid-column-end: 5;
  }
  #item-23 {
    background-color: #a98f59;
    grid-row-start: 8;
    grid-column-start: 1;

    grid-row-end: 9;
    grid-column-end: 2;
  }
  #item-24 {
    background-color: #65578e;
    grid-row-start: 8;
    grid-column-start: 2;

    grid-row-end: 9;
    grid-column-end: 3;
  }
  #item-25 {
    background-color: #fd7df5;
    grid-row-start: 8;
    grid-column-start: 3;

    grid-row-end: 9;
    grid-column-end: 4;
  }
  #item-26 {
    background-color: #e22f68 !important;
    grid-row-start: 8;
    grid-column-start: 4;

    grid-row-end: 10;
    grid-column-end: 5;
    font-size: xx-large;
    font-weight: lighter;
  }
  #item-27 {
    background-color: #a5b5fa;
    grid-row-start: 9;
    grid-column-start: 1;

    grid-row-end: 10;
    grid-column-end: 2;
  }
  #item-28 {
    background-color: #78daec;
    grid-row-start: 9;
    grid-column-start: 2;

    grid-row-end: 10;
    grid-column-end: 3;
  }
  #item-29 {
    background-color: #5bb575;
    grid-row-start: 9;
    grid-column-start: 3;

    grid-row-end: 10;
    grid-column-end: 4;
  }
`
export const minBtn = styled.button`
  background: rgb(26, 26, 25) !important;
  height: 11px;
  width: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-left: 12px;
`
export const minBtnTxt = styled.div`
  font-size: 15px;
  padding-top: 9px;
`

export const Button = styled.button`
  margin-left: 12px;
  background: rgb(34, 34, 34) !important;
  margin-bottom: 5px;
`