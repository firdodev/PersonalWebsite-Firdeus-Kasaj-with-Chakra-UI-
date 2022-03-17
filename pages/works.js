import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article'
import kingsandpigs from '../public/images/works/KingandPigs_1.jpg'
import foxRunner from '../public/images/works/3.jpg'
import dinoBurgers from '../public/images/works/dino_4.jpg'

const Works = () => (

    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Some of the Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dinoBurgers" title="DinoBurgers" thumbnail={dinoBurgers}>
            Its a 2 local multiplayer game where the 2 dino brothers need to save the world from the burger monsters.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="kingandpigs"
            title="King and Pigs"
            thumbnail={kingsandpigs}
          >
            A game where you need to kill the Pigs.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="foxRunner" thumbnail={foxRunner} title="Fox Runner">
            Help fox boy to save foxxie girl from the dark knight who is been holding her.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works