import styled from 'styled-components'


export const HeaderWrapper = styled.header`
  
    position: fixed;
    left:0;
    top:0;
    right:0;
    background:#fff;
    z-index:9;

    &.fixed {
      box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
    }

    &>div {
    position: relative;
  }

`

export const Logo = styled.div`
  position: absolute;
  top:50%;
  left:0;
  transform: translate(0, -50%);
  a {
    font-size:1.8rem;
    font-weight: 800;
    color: #000;
  }
  span {
    height: 1rem;
    width: 1rem;
    background: #4458dc;
    margin:0 4px;
    border-radius: 100%;
    display: inline-block;
    position:relative;
    bottom: 2px;

  }
  
`

export const NavMenu = styled.nav`
  display: block;
  width: 600px;
  margin:0;
  margin-left: auto;

  ul {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
     margin:0;

    li {
      list-style: none;

      a {
        text-transform: uppercase;
        line-height: 1;
        color: #141313;
        font-size: 1.5rem;
        font-weight: 500;
        &:hover {
        color: #854fee;

        }

        &.tel {
          svg {
            width: 20px;
            height: auto;
          }
        }
      }

      &.active a {
        color: #854fee;
      }
    }
  }

`
