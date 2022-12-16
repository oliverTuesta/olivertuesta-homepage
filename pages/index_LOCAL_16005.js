import { Box, Container, Heading } from '@chakra-ui/react';
import Section from '../layouts/section';

const Home = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="glassTeal" p={3} mb={6} align="center">
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
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>
                    Consectetur voluptatum similique quaerat deserunt
                    consequatur? Nam obcaecati eum praesentium dolore recusandae
                    Praesentium placeat deleniti
                </p>
            </Section>
        </Container>
    );
};

export default Home;
