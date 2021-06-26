import styled from 'styled-components'


export const SkillSection = styled.section`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    padding: 50px 0;

    .single__brand {
        border: 1px solid #201f1f17;
        text-align: center;
        padding: 1.8rem 0rem;
        margin: 0.9rem 0;
        width: 180px;
        height: 100px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.4s ease;
        .skill__icon{
            width: 60%;
        }

        &:hover {
            box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
            transform: scale(1.1);
        }


    }

`

export const ExperienceWrapper = styled.section`
    padding: 40px;
    background: #e029290a;
    width: 350px;
    display: block;
    margin-left:10vw;
    /* margin-left: auto; */
    .years__area {
        margin-bottom: 100px;
        position: relative;

        h1 {
            color: #854fee;
            sup {
                top:-0.5em
            }

        }

        h2 {
            font-weight: normal;
            text-transform: capitalize;
            span {
                display: block;
            }
        }
    }

    .call__area {
        width: 205px;
        svg {
            width: 48px;
            height: auto;
            margin: 0 16px;
            path {
                fill: #212529;
            }
        }
        h4 {
            font-weight: 500;
        }
        .call__now a {
            font-weight: 500;
            color:#007bff;
        }
    }

`