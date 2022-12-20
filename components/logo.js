import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`;

const Logo = () => {
    const footPrintImg = `/images/avocado.png`;
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                <Image
                    src={footPrintImg}
                    alt="footprint"
                    width={25}
                    height={25}
                />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    ml={3}
                    fontSize="2xl"
                >
                    SPIGI
                </Text>
            </LogoBox>
        </Link>
    );
};

export default Logo;
