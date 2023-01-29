import { WorkImage, Meta, Title } from '../../components/work';
import {
    Container,
    Badge,
    AspectRatio,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const LeadYourWay = () => {
    return (
        <Layout title="Spigi Landing Page">
            <Container>
                <Title>
                    Spigi Landing Page
                    <Badge ml={2}>2021</Badge>
                </Title>
                <Paragraph>
                    In this project, I used CSS and HTML to create a landing
                    page that showcases my skills in web design and development.
                    The page features a clean and modern design, with a focus on
                    typography, color, and layout. I used various CSS techniques
                    such as responsive design, grid layout, and animations to
                    create a visually appealing and user-friendly experience.
                    The purpose of this project was to practice and improve my
                    CSS skills, and I am constantly updating and refining the
                    page as I learn new techniques and trends.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/oliverTuesta/productLandingPage"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        HTML, CSS
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/spigi-landing-page_01.png"
                    alt="Product Landing Page"
                />
                <WorkImage
                    src="/images/works/spigi-landing-page_02.png"
                    alt="Product Landing Page"
                />
                <WorkImage
                    src="/images/works/spigi-landing-page_03.png"
                    alt="Product Landing Page"
                />
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
