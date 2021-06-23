import styled from 'styled-components'


export const Container = styled.div`
  flex-grow:1;
  margin:0 auto;
  padding: 0;
  position: relative;
  width: 1660px;
  height:100%;
  max-width: 100%;

  .grid__6 {
    width: 50%;
  }
`


export const Flex = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  
`

export const H1= styled.h1`
           font-size: 8rem;
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

export const Btn = styled.div`
  padding: 10px 20px;
    font-size: 1.5rem;
    position: relative;
    border: 3px solid transparent;
    border-radius: 4px;
    transition: all 0.3s ease;
    outline: none;
    color:#fff;


    background: linear-gradient(90deg, #4458dc 0%, #854fee 100%);
    background-clip: padding-box;
    box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
`