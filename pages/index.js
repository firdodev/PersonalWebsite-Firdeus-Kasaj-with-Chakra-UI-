import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
	return 	(
		<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
				Hello, I&apos;m a full-stack developer based in Albania!
			</Box>
			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Firdeus Kasaj
					</Heading>
					<p>Game Developer (Mobile Developer & Website Developer)</p>
				</Box>
				<Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
					<Image borderColor="whiteAlphha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/about_2.jpg" alt="Profile Image" />
				</Box>
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>High level experience in web design, game development, mobile development and development knowledge, producing quality work.{' '}
				<NextLink href="/works/dinoBurgers">
					<Link>Dino Burgers</Link>
				</NextLink>
				.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My Portofolio
						</Button>
					</NextLink>
				</Box>
			</Section>
			
			{/* Bio */}
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>2005 </BioYear>
					Born in Tirana, Albania
				</BioSection>
				<BioSection>
					<BioYear>2020 </BioYear>
					Completed elementary school
				</BioSection>
				<BioSection>
					<BioYear>2021 </BioYear>
					Had his first inernship at EasyPay, where i was creating a database managment with .net 
				</BioSection>
			</Section>
			
			{/* I ♥ */}
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>Art, Machine Learning, AI, Robotics, Swiming, Photography</Paragraph>
			</Section>

			<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				On the web
			</Heading>
			<List>
			<ListItem>
				<Link href="https://github.com/firdodev" target="_blank">
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<IoLogoGithub />}
				>
					@firdodev
				</Button>
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://www.instagram.com/firdo.dev/" target="_blank">
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<IoLogoInstagram />}
				>
					@Firdo.Dev
				</Button>
				</Link>
			</ListItem>
			</List>
		</Section>
		</Container>
		</Layout>
	)
}

export default Page
