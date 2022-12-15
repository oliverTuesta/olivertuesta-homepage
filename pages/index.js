import Head from 'next/head';
import { Box, Container, Heading } from '@chakra-ui/react';

export default function Home() {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content="Oliver's homepage" />
                <link rel="icon" href="/favicon.ico" />
                <title>Oliver Tuesta - Homepage</title>
            </Head>
            <Container maxW="container.md" pt={14}>
                <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                    Hello, I&apos;m a software engineer based in Lima, Peru.
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Oliver Tuesta
                        </Heading>
                        <p>
                            Artist, developer, and designer specializing in
                            custom, handmade work
                        </p>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
