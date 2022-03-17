import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KingAndPigs">
    <Container>
      <Title>
        King and Pigs <Badge>2020-</Badge>
      </Title>
      <P>
        A game where you need to kill the pigs and than you can save the princess
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

      <WorkImage src="/images/works/KingandPigs_1.jpg" alt="KingAndPigs" />
      <WorkImage src="/images/works/KingandPigs_2.jpg" alt="KingAndPigs" />
      <WorkImage src="/images/works/KingandPigs_3.jpg" alt="KingAndPigs" />
    </Container>
  </Layout>
)

export default Work