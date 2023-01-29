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

import {
    IoLogoTwitter,
    IoLogoGithub,
    IoMdMail,
    IoLogoLinkedin,
} from 'react-icons/io';
import { SiLeetcode } from 'react-icons/si';

import Layout from '../components/layouts/article';

const Home = () => {
    return (
        <Layout>
            <Container maxW="container.md">
                <Box
                    borderRadius="10"
                    bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hi, I&apos;m a software engineer based in Lima, Peru.
                </Box>
                <Box display={{ sm: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Oliver Tuesta
                        </Heading>
                        <p>
                            Developer, artist, and designer specializing in
                            custom, handmade work
                        </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ sm: 6 }}
                        align="center"
                    >
                        <Box
                            borderColor={useColorModeValue(
                                'white',
                                'whiteAlpha.900'
                            )}
                            borderWidth={3}
                            borderStyle="solid"
                            borderRadius="full"
                            overflow={'hidden'}
                            width="150px"
                            height="150px"
                            bg={useColorModeValue('glassTeal', '#FAC887')}
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
                        Oliver is a software engineering student from Peru with
                        a passion for computers and art. He enjoys using his
                        coding skills to solve problems and is always looking
                        for ways to improve his abilities. When not in front of
                        a computer, Oliver enjoys reading books, going to the
                        gym, solving puzzles, and drawing. He is driven and
                        dedicated to his studies and is eager to put his skills
                        to use in the field of software engineering.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="orange"
                                mr={4}
                            >
                                Portfolio
                            </Button>
                        </NextLink>
                        <NextLink href="mailto:oliver.jtuesta@gmail.com">
                            <Button rightIcon={<IoMdMail />} colorScheme="teal">
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
                        <BioYear>2017</BioYear>Write my first Hello World
                        program
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - present</BioYear>
                        Studying Software Engineering
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        Art,{' '}
                        <Link
                            href="https://twitter.com/oliver_tuesta"
                            isExternal
                        >
                            Web development
                        </Link>
                        {', '} Machine learning,{' '}
                        <Link href="https://twitter.com/spigiplant" isExternal>
                            Drawing
                        </Link>
                    </Paragraph>
                </Section>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Social Links
                    </Heading>
                    <List display="flex" flexWrap="wrap">
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
                                href="https://github.com/oliverTuesta"
                                Icon={<IoLogoGithub />}
                            >
                                @oliverTuesta
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://twitter.com/oliver_tuesta"
                                Icon={<IoLogoTwitter />}
                            >
                                @oliver_tuesta
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://leetcode.com/oliver_tuesta/"
                                Icon={<SiLeetcode />}
                            >
                                @oliver_tuesta
                            </SocialLink>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;
