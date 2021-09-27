import styled from 'styled-components'

export const Cursor = styled.div`
    /* background: red; */
    width: 20px;
    height:20px;
    border-radius: 100%;
    background:none;
    border: 2px solid #141313;
    position: fixed;
    pointer-events: none;
    z-index: 99;
    transform: translate(-50%, -50%);
    /* transform: scale(2) */
`