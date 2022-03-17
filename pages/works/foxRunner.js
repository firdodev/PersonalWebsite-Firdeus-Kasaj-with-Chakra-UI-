import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="foxRunner">
    <Container>
      <Title>
        Fox Runner <Badge>2020-</Badge>
      </Title>
      <P>
        It was my first game in 2D. The basic description is that you need to avoid the obsticales.
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

      <WorkImage src="/images/works/3.jpg" alt="foxRunner" />
    </Container>
  </Layout>
)

export default Work