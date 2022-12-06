import styled from "styled-components"
import { Container } from "../../layouts/Container"

const Nav = styled.nav`
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 640px) { 
       display: none;
       visibility: hidden;
    }
`

const UL = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;


`

const LI = styled.li`
    position: relative;

    ::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform-origin: center;
        transform: scale(0);
        height: 2px;
        background-color: #fff;
        transition: all .3s;
    }

    &:hover::before {
        transform: scale(1);
    }
`

const Link = styled.a`
    cursor: pointer;
`

const NavBar = () =>{
    return (
        <>
            <Nav>
                <UL>
                    <LI>
                        <Link>Home</Link>
                    </LI>
                    <LI>
                        <Link>About</Link>
                    </LI>
                    <LI>
                        <Link>Services</Link>
                    </LI>
                </UL>
            </Nav>
        </>
    )
}

export default NavBar