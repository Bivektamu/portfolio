import styled from "styled-components";

export const ContactSection = styled.section`
    background-position: left 50%!important;
    background-repeat: no-repeat!important;
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