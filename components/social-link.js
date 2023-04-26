import { Link, Box, Button } from '@chakra-ui/react';

const SocialLink = (props) => {
    const { href, children, Icon } = props;
    return (
        <Box>
            <Link href={href} isExternal p={2}>
                <Button variant="ghost" colorScheme="green" leftIcon={Icon}>
                    {children}
                </Button>
            </Link>
        </Box>
    );
};

export default SocialLink;
