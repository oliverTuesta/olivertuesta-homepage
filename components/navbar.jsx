import Logo from './logo';
import NextLink from 'next/link';
import ThemeToggleButton from './theme-toggle-button';

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
    const inactiveColor = useColorModeValue('gray.1000', 'whiteAlpha.900');
    return (
        <Link
            as={NextLink}
            align="center"
            href={href}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            borderRadius="md"
            px={2}
            py={1}
        >
            {children}
        </Link>
    );
};

const Navbar = (props) => {
    const { path } = props;
    const linkColor = useColorModeValue('gray.1000', 'whiteAlpha.900');
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
                    direction={{ base: 'column', sm: 'row' }}
                    display={{ base: 'none', sm: 'flex' }}
                    width={{ base: 'full', sm: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, sm: 0 }}
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
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', sm: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                            />
                            <MenuList>
                                <Link
                                    as={NextLink}
                                    color={linkColor}
                                    href="/"
                                    passHref
                                >
                                    <MenuItem>About</MenuItem>
                                </Link>
                                <Link
                                    as={NextLink}
                                    href="/works"
                                    passHref
                                    color={linkColor}
                                >
                                    <MenuItem>Works</MenuItem>
                                </Link>
                                <Link
                                    as={NextLink}
                                    href="/posts"
                                    passHref
                                    color={linkColor}
                                >
                                    <MenuItem>Posts</MenuItem>
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/oliverTuesta"
                                    color={linkColor}
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
