import styled from "styled-components"
import { Container } from "../layouts/Container"
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { P1, P2 } from "../elements/Typography/Paragraphs";
import { H3 } from "../elements/Typography/Headings";


const FooterContainer = styled.footer`
    color: var(--text-white);
    padding: 50px 20px 50px 20px;

`

const FooterContents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
`

const Nav = styled.ul`
    font-size: 1rem;
    list-style: none;
    & > *:not(:last-child){
        margin-bottom: 8px;
    }
    & > li {
        border-bottom: 1px solid #6B7280;
    }
`

const NavItem = styled.li`
    padding: .2rem;
`

const NavLink = styled.a`

    cursor: pointer;
`

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
`
const IconContainer = styled.div`
    display: inline-block;
    border: 1px solid var(--text-white);
    padding: .5rem;
    border-radius: 50%;
    transition: all .2s ease-out;
    
    &:hover {
        background-color: var(--text-white);
        color: #1F2937;
        cursor: pointer;
    }
`

const LegalContentsContainer = styled.div`
    text-align: center;
`



const Footer = () =>{
    return (
        <>
            <FooterContainer>
                <Container>
                    <FooterContents>
                        <Nav>
                            <NavItem>
                                <NavLink>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <IconsContainer>
                            <IconContainer>
                                <SlSocialFacebook size={30} />
                            </IconContainer>
                            <IconContainer>
                                <SlSocialInstagram size={30} />
                            </IconContainer>
                            <IconContainer>
                                <SlSocialTwitter size={30} />
                            </IconContainer>
                        </IconsContainer>
                    </FooterContents>
                    <LegalContentsContainer>
                        <P2>&copy; 2022 Somewhere in the Earth, Inc. All rights reserved</P2>
                    </LegalContentsContainer>
                </Container>
            </FooterContainer>
        </>
    )
}

export default Footer