import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '@fontsource/poppins/700.css';

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
    const footPrintImg = `/images/cactus.png`;
    return (
        <Link href="/">
            <LogoBox>
                <Image
                    src={footPrintImg}
                    alt="footprint"
                    width={20}
                    height={20}
                />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="Poppins"
                    ml={3}
                >
                    SPIGI
                </Text>
            </LogoBox>
        </Link>
    );
};

export default Logo;
