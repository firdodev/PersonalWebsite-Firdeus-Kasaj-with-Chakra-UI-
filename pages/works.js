import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article'
import kingsandpigs from '../public/images/works/KingandPigs_1.jpg'
import foxRunner from '../public/images/works/3.jpg'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="KingsandPigs" title="Kings And Pigs" thumbnail={kingsandpigs}>
                        A game where you need to kill the Pigs.
                    </WorkGridItem>
                </Section>
                <Section delay={0.2}>
                    <WorkGridItem id="foxRunner" title="Fox Runner" thumbnail={foxRunner}>
                        Help fox boy to save foxxie girl from the dark knight who is been holding her.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works