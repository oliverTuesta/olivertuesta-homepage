import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    Box,
    Button,
    Container,
    Heading,
    useColorModeValue,
    Link,
    ListItem,
    List,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import SocialLink from '../components/social-link';
import { SiCodeforces } from "react-icons/si";

import { IoLogoTwitter, IoLogoGithub, IoMdMail, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io';

import Layout from '../components/layouts/article';

const Home = () => {
    return (
        <Layout>
            <Container maxW="container.md">
                <Box
                    borderRadius="10"
                    bg={useColorModeValue('orange.100', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                  I'm just a regular, everyday normal guy with big dreams
                </Box>
                <Box display={{ sm: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Oliver Tuesta
                        </Heading>
                        <p>Software and artist</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ sm: 6 }} align="center">
                        <Box
                            borderColor={useColorModeValue('white', 'whiteAlpha.900')}
                            borderWidth={3}
                            borderStyle="solid"
                            borderRadius="full"
                            overflow={'hidden'}
                            width="150px"
                            height="150px"
                            bg={useColorModeValue('green.500', 'green.200')}
                            position="relative"
                        >
                            <NextImage
                                display="inline-block"
                                src="/images/spigi.png"
                                width={150}
                                height={150}
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Oliver
                    </Heading>
                    <Paragraph>
                        Hi, I'm Oliver, a software engineer with lot of dreams to accomplish before leaving this world. 
                        I love art, and the various forms of this, I love listening to music, I love cars and I truly adore coding.
                        I love coding because it allows us to build things for everyone connected to internet and
                        I find it amazing how we can bring our imaginations to life through software and make an impact on real lifes.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange" mr={4}>
                                Portfolio
                            </Button>
                        </NextLink>
                        <NextLink href="mailto:oliver.jtuesta@gmail.com">
                            <Button rightIcon={<IoMdMail />} colorScheme="green">
                                Contact
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Amazonas, Peru
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>Write my first Hello World program
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - present</BioYear>
                        Studying Software Engineering
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        QA Trainee at Visma
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Banco de Credito del Peru Intern
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        Books, Cars, Rubik's cubes, Competitive programming and Art
                    </Paragraph>
                </Section>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Social Links
                    </Heading>
                    <List display="flex" flexWrap="wrap">
                        <ListItem>
                            <SocialLink
                                href="https://github.com/oliverTuesta"
                                Icon={<IoLogoGithub />}
                            >
                                @oliverTuesta
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://twitter.com/spigiis"
                                Icon={<IoLogoTwitter />}
                            >
                                @oliver_tuesta
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://www.linkedin.com/in/olivertuesta/"
                                Icon={<IoLogoLinkedin />}
                            >
                                @olivertuesta
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://codeforces.com/profile/spigi"
                                Icon={<SiCodeforces />}
                            >
                                @spigi
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://www.youtube.com/@spigiz"
                                Icon={<IoLogoYoutube />}
                            >
                                @spigiz
                            </SocialLink>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;
