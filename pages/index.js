import NextLink from 'next/link';
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
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
import Layout from '../components/layouts/article';

const Home = () => {
    return (
        <Layout>
            <Container maxW="container.md">
                <Box
                    borderRadius="10"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            borderRadius="full"
                            overflow={'hidden'}
                            width="150px"
                            height="150px"
                            bg={useColorModeValue('teal.100', 'cyan.100')}
                        >
                            <Image
                                display="inline-block"
                                src="/images/spigi.png"
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
                        a passion for web development and Art. He enjoys using
                        his coding skills to solve problems and is always
                        looking for ways to improve his abilities. When not in
                        front of a computer, Oliver enjoys reading books, going
                        to the gym, solving puzzles, and drawing. He is driven
                        and dedicated to his studies and is eager to put his
                        skills to use in the field of software engineering.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                                mr={4}
                            >
                                Portfolio
                            </Button>
                        </NextLink>
                        <NextLink href="mailto:oliver.jtuesta@gmail.com">
                            <Button
                                rightIcon={<IoMdMail />}
                                colorScheme="purple"
                            >
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
                        <BioYear>2020</BioYear>Started the hobby of reading
                        books
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
                    <List>
                        <ListItem>
                            <SocialLink
                                href="https://www.linkedin.com/in/oliver-jes%C3%BAs-tuesta-yoplac-533ba4200/"
                                Icon={<IoLogoLinkedin />}
                            >
                                Oliver Tuesta
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
                                href="https://twitter.com/spigiplant"
                                Icon={<IoLogoTwitter />}
                            >
                                @spigiplant
                            </SocialLink>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;
