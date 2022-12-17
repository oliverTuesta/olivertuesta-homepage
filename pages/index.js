import NextLink from 'next/link';
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Home = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center"
            >
                Hi, I&apos;m a software engineer based in Lima, Peru.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Oliver Tuesta
                    </Heading>
                    <p>
                        Developer, artist, and designer specializing in custom,
                        handmade work
                    </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/spigi.jpg"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Oliver
                </Heading>
                <Paragraph>
                    Oliver is a software engineering student from Peru with a
                    passion for web development and Linux. He enjoys using his
                    coding skills to solve problems and is always looking for
                    ways to improve his abilities. When not in front of a
                    computer, Oliver enjoys reading books, going to the gym,
                    solving puzzles, and drawing. He is driven and dedicated to
                    his studies and is eager to put his skills to use in the
                    field of software engineering.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref>
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            Portfolio
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
                    <BioYear>2014</BioYear>Write my first Hello World program
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>Started the hobby of reading books
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
                    Web development,{' '}
                    <Link href="https://twitter.com/spigiplant" isExternal>
                        Drawing
                    </Link>
                    , Art and Machine Learning
                </Paragraph>
            </Section>
        </Container>
    );
};

export default Home;
