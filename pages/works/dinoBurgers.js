import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="dinoBurgers">
    <Container>
      <Title>
        Dino Burgers <Badge>2022-</Badge>
      </Title>
      <P>
         Its a 2 local multiplayer game where the 2 dino brothers need to save the world from the burger monsters.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Unity</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dino_1.jpg" alt="dinoBurgers" />
      <WorkImage src="/images/works/dino_2.jpg" alt="dinoBurgers" />
      <WorkImage src="/images/works/dino_3.jpg" alt="dinoBurgers" />
    
    </Container>
  </Layout>
)

export default Work