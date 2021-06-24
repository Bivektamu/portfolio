import styled from 'styled-components'


export const Container = styled.div`
  margin:0 auto;
  padding: 0;
  position: relative;
  width: 1660px;
  max-width: calc(100% - 80px);

  .grid__6 {
    width: 50%;
  }
`


export const Flex = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;

  &.row__reverse {
    flex-direction: row-reverse;
  }
  &.flex__wrap {
    flex-wrap: wrap;
  }

  &.align__top {
    align-items: flex-start;
  }
`

export const H1= styled.h1`
           font-size: 8rem;
      text-transform: uppercase;
      font-weight:700;
`


export const H2= styled.h2`
           font-size: 4rem;
      text-transform: uppercase;
      font-weight:700;
`


export const H3= styled.h3`
           font-size:5rem;
`

export const H4= styled.h4`
           font-size: 2.4rem;
      text-transform: uppercase;
      font-weight:700;
`

export const H5= styled.h5`
           font-size: 1.5rem;
      text-transform: uppercase;
      font-weight:700;
`

export const Btn = styled.div`
    padding: 15px 0;
    position: relative;
    border-radius: 4px;
    transition: all 0.3s ease;
    outline: none;
    width: 150px;
    cursor: pointer;
    background: linear-gradient(90deg, #4458dc 0%, #854fee 100%);
    background-clip: padding-box;
    box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
    a {
      color:#fff;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 500;
      display: block;
      text-align:center;
    }
`