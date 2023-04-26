import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('light', 'dark')(props),
            scrollBehavior: 'smooth',
        },
    }),
};

const components = {
    Heading: {
        variants: {
            'section-title': (props) => ({
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('orange.500', 'orange.200')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                color: mode('#272839', '#fff')(props),
            }),
            'page-title': (props) => ({
                color: mode('#272839', '#fff')(props),
            }),
        },
    },
    Link: {
        baseStyle: (props) => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
        }),
    },
};

const fonts = {
    heading: 'Poppins',
};

const colors = {
    primary: '#E07A5F',
    secondary: '#3D405B',
    dark: '#1C1D23',
    light: '#FFFBF2',
    tertiary: '#F2CC8F',
    quaternary: '#81B29A',
    orange: {
        200: '#F2CC8F',
        500: '#E07A5F',
    },
    glassTeal: '#88ccca',
    green: {
        200: '#88ccca',
        500: '#81B29A',
    },
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors,
});

export default theme;
