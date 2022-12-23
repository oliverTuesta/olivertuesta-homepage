import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../navbar';
import PageTransition from '../page-transition';
import Avocado from '../avocado';
import NoSsr from '../no-ssr';
import Footer from '../footer';

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Oliver Tuesta's personal website"
                />
                <meta name="author" content="Oliver Tuesta" />
                <meta
                    name="keywords"
                    content="Oliver Tuesta, persoanl website, Portfolio website, spigi"
                />
                <meta name="robots" content="all" />
                <link rel="icon" href="/oliver.ico" />
                <title>Oliver Tuesta - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                <NoSsr>
                    <Avocado />
                </NoSsr>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;
