import styled from "styled-components"
import { Container } from "../layouts/Container"
import { H1, H2 } from "../elements/Typography/Headings"
import { ItalicP, P1 } from "../elements/Typography/Paragraphs"
import { Section } from "../elements/Section/Section"

const InfoSectionContainer = styled(Section)`
    margin-top: 100px;
    background-color: #111827;
    padding: 150px 0 150px 0;
    border-top: 1px solid #1F2937;
    border-bottom: 1px solid #1F2937;
`

const InfoContent = styled.div`
    padding: 2rem;

    text-align: center;
    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`

const InfoSection = () =>{
    return (
        <>
            <InfoSectionContainer>
                <Container>
                    <InfoContent>
                        <H2>Lorem ipsum dolor sit amet.</H2>
                        <ItalicP>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi hic cum non beatae culpa illo, placeat quos quod unde id vero nemo alias enim illum eaque, consequuntur, ipsam magni corporis! Quia vitae sequi assumenda! Sit reprehenderit incidunt sed quaerat veniam, iure labore et eius enim, laboriosam minus quas eaque!"s</ItalicP>
                    </InfoContent>
                </Container>
            </InfoSectionContainer>
        </>
    )
}

export default InfoSection