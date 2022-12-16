import Logo from './logo';
import NextLink from 'next/link';

import {
    Box,
    Container,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray.400', 'whiteAlpha.900');
    return (
        <Link
            as={NextLink}
            align="center"
            href={href}
            px={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
    );
};

const Navbar = (props) => {
    const { path } = props;
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                            />
                            <MenuList>
                                <Link as={NextLink} href="/" passHref>
                                    <MenuItem>About</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/works" passHref>
                                    <MenuItem>Works</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/posts" passHref>
                                    <MenuItem>Posts</MenuItem>
                                </Link>
                                <Link
                                    href="https://github.com/oliverTuesta"
                                    passHref
                                >
                                    <MenuItem>Github</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
