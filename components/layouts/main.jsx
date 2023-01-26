import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
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

            <Container maxW="container.sm" pt={14} position="relative">
                <Box py={5} px={4} borderRadius="sm" display="block">
                    <Image
                        src="/images/coder.gif"
                        alt="Coder"
                        width={570}
                        height={60}
                        style={{ display: 'block', margin: 'auto' }}
                        loading="eager"
                    />
                </Box>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;
