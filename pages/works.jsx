import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem, GridItemsStyle } from '../components/grid-item';
import thumbWallbot from '../public/images/wallbot.png';
import thumbLanding from '../public/images/landing-page.png';
import thumbLyw from '../public/images/lyw.png';
import thumbHero from '../public/images/extinct-hero.png';
import Layout from '../components/layouts/article';

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <GridItemsStyle />
                <Heading as={'h3'} mb={4} fontSize="xl">
                    Works
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <WorkGridItem
                        id="extinct-hero"
                        title="Extinct Hero"
                        thumbnail={thumbHero}
                    >
                        2D video game made with C++ and Visual Studio.
                    </WorkGridItem>
                    <WorkGridItem
                        id="lead-your-way"
                        title="Lead Your Way"
                        thumbnail={thumbLyw}
                    >
                        A landing page made with HTML, CSS and JavaScript.
                    </WorkGridItem>
                    <WorkGridItem
                        id="spigi"
                        title="Spigi Landing Page"
                        thumbnail={thumbLanding}
                    >
                        A product landing page made with HTML, CSS and
                        JavaScript.
                    </WorkGridItem>
                    <WorkGridItem
                        id="wallbot"
                        title="Wallbot"
                        thumbnail={thumbWallbot}
                    >
                        A Discord bot that allows users to download wallpapers
                        from Wallhaven made with Node.js and Discord.js.
                    </WorkGridItem>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Works;
