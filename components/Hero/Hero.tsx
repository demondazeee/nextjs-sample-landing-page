import styled from "styled-components"
import { Container } from "../layouts/Container"
import { BtnPrimary, BtnPrimary_Md } from "../elements/Buttons/Button"
import { H1, H2 } from "../elements/Typography/Headings"
import NavBar from "../elements/NavBar/NavBar"
import { SlMenu } from "react-icons/sl";


const Header = styled.header`
    min-height: 95vh;
    color: var(--text-white);
    padding: 1rem;
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
const SideMenuContainer = styled.ul`
    font-size: 1.5rem;
    visibility: hidden;
    position: absolute;
    right: 3%;
    list-style: none;
    padding: 1rem 0 1rem 0;
    background-color: #3F3F46;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    z-index: 999;
    display: flex;
    flex-direction: column;

`

const SideMenuLi = styled.li`
    padding: .5rem 1.5rem .5rem 1.5rem;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
    &:hover  {
        background-color: #A1A1AA;
    }
`
const SideMenuLink = styled.a`

`

const SideMenuIcon = styled.a`
    position: relative;
    transition: color .2s;
    cursor: pointer;

    &:hover {
        color: #A1A1AA;
    }
`

const SideMenu = styled.div`

    & > ${SideMenuIcon} {
        display: none;
    }

    @media (max-width: 640px) { 
        & > ${BtnPrimary_Md} {
            display: none;
        }

        & > ${SideMenuIcon} {
            display: block;
        }
        &:hover ${SideMenuContainer}{
            visibility: visible;
            position: absolute;
        }
    }

`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


`

const Hero = () =>{
    return(
        <>
            <Header>
                <Container>
                    <NavContainer>
                        <H2>Logo</H2>
                        <NavBar />
                        <SideMenu>
                            <BtnPrimary_Md>
                                Contact
                            </BtnPrimary_Md>
            
                            <SideMenuIcon>
                                <SlMenu size={40} />
                            </SideMenuIcon>

                            <SideMenuContainer>
                                <SideMenuLi>
                                    <SideMenuLink>Home</SideMenuLink>
                                </SideMenuLi>
                                <SideMenuLi>
                                    <SideMenuLink>About</SideMenuLink>
                                </SideMenuLi>
                                <SideMenuLi>
                                    <SideMenuLink>Services</SideMenuLink>
                                </SideMenuLi>
                                <SideMenuLi>
                                    <SideMenuLink>Contact</SideMenuLink>
                                </SideMenuLi>
                            </SideMenuContainer>
                        </SideMenu>

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