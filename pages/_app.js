import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from './components/navbar';
import { withRouter } from 'next/router';

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider>
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

                <Navbar path={router.asPath} />
                <Container maxW="container.md">
                    <Component {...pageProps} />
                </Container>
            </Box>
        </ChakraProvider>
    );
}

export default MyApp;
