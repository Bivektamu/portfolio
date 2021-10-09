import styled from 'styled-components'

export const Cursor = styled.div`
    /* background: red; */
    width: 20px;
    height:20px;
    border-radius: 100%;
    background:none;
    border: 1px solid #141313;
    position: fixed;
    pointer-events: none;
    z-index: 99;
    transform: translate(-50%, -50%);
    /* transform: scale(2) */
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.hovered {
        width: 50px;
        height:50px;
        border-width: 2px;
    }
`