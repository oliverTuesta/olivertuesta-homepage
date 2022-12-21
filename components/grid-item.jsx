import NexttLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <>
            <Box w="100%" align="center">
                <LinkBox cursor={'pointer'}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-image"
                        loading="lazy"
                    />
                    <LinkOverlay href={href} target="_blank">
                        <Text mt={2}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </Box>
        </>
    );
};

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    return (
        <>
            <Box w="100%" align="center">
                <NexttLink href={`/works/${id}`} scroll={false}>
                    <LinkBox cursor={'pointer'}>
                        <Image
                            src={thumbnail}
                            alt={title}
                            loading="lazy"
                            className="grid-item-image"
                            placeholder="blur"
                        />
                        <Text mt={2} fontSize={20} fontWeight="bold">
                            {title}
                        </Text>
                        <Text fontSize={14}>{children}</Text>
                    </LinkBox>
                </NexttLink>
            </Box>
        </>
    );
};

export const GridItemsStyle = () => {
    return (
        <Global
            styles={`
            .grid-item-image {
                border-radius: 10px;
                }
            `}
        />
    );
};
