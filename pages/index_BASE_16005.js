import { Box, Container, Heading } from '@chakra-ui/react';

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
        </Container>
    );
};

export default Home;
