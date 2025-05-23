import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { AiFillFire } from "react-icons/ai";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

function Footer() {
    return (
        <Box mt={8} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'container.md'}
                py={4}
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                justify={{ base: 'center', sm: 'space-between' }}
                align={{ base: 'center', sm: 'center' }}
                color="gray.500"
                fontSize={'0.8rem'}
            >
                <Text>© 2022 Oliver Tuesta</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://spigisblog.vercel.app/'}>
                        <AiFillFire />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
