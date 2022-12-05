import styled from "styled-components";

export const BtnPrimary = styled.a`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    display: inline-block;
    background-color: #2563EB;
    transition: background-color .2s, transform .2s ease-out;
    padding: .5rem 1.2rem;
    border-radius: 100px;
    cursor: pointer;

    &:hover {
        background-color: #1E40AF;
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }

    &:active {
        transform: translateY(-1px);
    }
`

export const BtnPrimary_Md = styled(BtnPrimary)`
    font-size: 1rem;

    &:hover {
        background-color: #1E40AF;
        transform: translateY(0);
    }
`