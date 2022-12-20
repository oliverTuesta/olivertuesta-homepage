import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../navbar';
import PageTransition from '../page-transition';

const Main = ({ children, router }) => {
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

            <Navbar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Main;
