import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import { AnimatePresence } from 'framer-motion';
import theme from '../lib/theme';
import Fonts from '../components/fonts';

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
