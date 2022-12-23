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
        <Layout title="Extinct Hero">
            <Container>
                <Title>
                    Extinct Hero
                    <Badge ml={2}>2021</Badge>
                </Title>
                <Paragraph>
                    <b> Extinct Hero</b> is a 2D video game made with C++ and
                    Visual Studio. The game promotes the idea of saving
                    endangered species by playing a game. In the game you are
                    the hero who has to save endangered species from hunters.
                    The player can collect coins to make the enemies move
                    slower. This was a project for the university.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/oliverTuesta/TF_ExtinctHero"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        C++, Visual Studio 2019
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/extinct-hero_01.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_02.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_03.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_04.png"
                    alt="Extinct Hero"
                />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/72WUrp0dRNY?start=369"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
