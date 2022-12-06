import styled from "styled-components";

export const P1 = styled.p`
    font-size: 1.2rem;
    
    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`

export const P2 = styled(P1)`
    font-size: .8rem;
    
`

export const ItalicP = styled(P1)`
    font-style: italic;
`