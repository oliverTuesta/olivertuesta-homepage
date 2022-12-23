import NextLink from 'next/link';
import {
    Heading,
    Box,
    Image,
    Link,
    Badge,
    AspectRatio,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => {
    return (
        <Box>
            <Link as={NextLink} href="/works">
                Works
            </Link>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading as="h3" fontSize={20} mb={4} display="inline-block">
                {children}
            </Heading>
        </Box>
    );
};

export const WorkImage = ({ src, alt }) => {
    return (
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
        </AspectRatio>
    );
};

export const Meta = ({ children }) => {
    return (
        <Badge colorScheme="green" mr={2}>
            {children}
        </Badge>
    );
};
