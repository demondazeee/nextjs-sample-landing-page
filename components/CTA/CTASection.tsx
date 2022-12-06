import styled from "styled-components"
import { BtnPrimary } from "../elements/Buttons/Button"
import { Section } from "../elements/Section/Section"
import { H2 } from "../elements/Typography/Headings"
import { P1 } from "../elements/Typography/Paragraphs"
import { Container } from "../layouts/Container"

const CTASectionContainer = styled(Section)`
    background-color: #111827;
    padding: 100px 0 100px 0;
    border-top: 1px solid #1F2937;
    border-bottom: 1px solid #1F2937;
`

const CTAContainer = styled.div`
    text-align: center;
    padding: 2rem;
    & > *:not(:last-child){
        margin-bottom: 22px;
    }
`

const CTASection = () =>{
    return (
        <>
            <CTASectionContainer>
                <Container>
                    <CTAContainer>
                        <H2>Lorem ipsum dolor sit amet.</H2>
                        <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt aliquid facere dolores officia enim ab? Quisquam consequuntur aliquid officia!</P1>
                        <BtnPrimary>Sign up now</BtnPrimary>
                    </CTAContainer>
                </Container>
            </CTASectionContainer>
        </>
    )
}
export default CTASection