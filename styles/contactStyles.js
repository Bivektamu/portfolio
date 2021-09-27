import styled from "styled-components";

export const ContactSection = styled.section`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    background-position: left 50%!important;
    background-repeat: no-repeat!important;
    height: calc(100vh - 6rem);
    padding:0;

    h2 {
        text-align: center;
    }

    .social {
        text-align: center;
    }
    svg {
        font-size:25px;
        margin: 4rem;
        color: #212529;
    }

    .fb:hover svg{
        color: #0056b3;
    }

    .gmail:hover svg{
        color: #EA4335;
    }

    .linkedin:hover svg{
        color: #0A66C2;
    }

    .github:hover svg{
        color: #2DA44E;
    }

`