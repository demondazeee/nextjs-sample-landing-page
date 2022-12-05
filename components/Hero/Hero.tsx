import styled from "styled-components"
import { Container } from "../layouts/Container"
import { BtnPrimary, BtnPrimary_Md } from "../elements/Buttons/Button"
import { H1, H2 } from "../elements/Typography/Headings"
import NavBar from "../elements/NavBar/NavBar"

const Header = styled.header`
    min-height: 95vh;
    color: var(--text-white);
    padding: 1rem;
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeroContainer = styled.div`
    margin-top: 100px;
    text-align: center;

    & > h1 {
        margin-bottom: 20px;
    }
`

const HeroHeader = styled(H1)`
    animation: moveInLeft 2s ease-out;
`

const HeroButton = styled(BtnPrimary)`
    animation: moveInBottom 2s ease-out 2s;
    animation-fill-mode: backwards;
`

const Hero = () =>{
    return(
        <>
            <Header>
                <Container>
                    <NavContainer>
                        <H2>Logo</H2>
                        <NavBar />
                        <BtnPrimary_Md>
                            Contact
                        </BtnPrimary_Md>
                    </NavContainer>

                    <HeroContainer>
                        <HeroHeader>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, omnis.</HeroHeader>
                        <HeroButton>Sign Up</HeroButton>
                    </HeroContainer>
                </Container>
            </Header>
        </>
    )
}

export default Hero