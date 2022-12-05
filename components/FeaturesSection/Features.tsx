import styled from "styled-components"
import { H2 } from "../elements/Typography/Headings"
import { P1 } from "../elements/Typography/Paragraphs"
import { Container } from "../layouts/Container"
import { SlHome, SlDiamond ,SlGlobe } from "react-icons/sl";
import { Section } from "../elements/Section/Section";


const FeatureSectionContainer = styled(Section)`
    padding: 100px 0 150px 0;
`

const FeaturesContainer = styled.div`
    text-align: center;
`

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    row-gap: 5rem;
    column-gap: 2rem;
    margin-top: 100px;
`

const FeaturesItem = styled.div`
    
`
const FeaturesItem2 = styled(FeaturesItem)`
    grid-row: 2;
    grid-column: 2;
`

const FeaturesItem3 = styled(FeaturesItem)`
    grid-row: 3;
    grid-column: 1;
`

const FeaturesSection = () =>{
    return (
        <>
            <FeatureSectionContainer>
                <Container>
                    <FeaturesContainer>
                        <H2>Lorem, ipsum dolor.</H2>
                        <FeaturesGrid>
                            <FeaturesItem>
                                <SlHome size={50} />
                                <H2>Test 1</H2>
                                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia repudiandae aspernatur deleniti non molestiae consequatur architecto, incidunt obcaecati quod!</P1>
                            </FeaturesItem>
                            <FeaturesItem2> 
                                <SlDiamond size={50} />
                                <H2>Test 2</H2>
                                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia repudiandae aspernatur deleniti non molestiae consequatur architecto, incidunt obcaecati quod!</P1>
                            </FeaturesItem2>
                            <FeaturesItem3>
                                <SlGlobe size={50} />
                                <H2>Test 3</H2>
                                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia repudiandae aspernatur deleniti non molestiae consequatur architecto, incidunt obcaecati quod!</P1>
                            </FeaturesItem3>
                        </FeaturesGrid>
                    </FeaturesContainer>
                </Container>
            </FeatureSectionContainer>
        </>
    )
}

export default FeaturesSection