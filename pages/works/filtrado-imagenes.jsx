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
        <Layout title="Filtrado de Imagenes">
            <Container>
                <Title>
                    Filtrado de Im&aacute;genes
                    <Badge ml={2}>2021</Badge>
                </Title>
                <Paragraph>
                    <b>Filtrado de Imagenes</b> is a web-based image processing
                    tool that allows users to apply various image enhancement
                    filters to both random and uploaded images. The filters
                    include Sobel, Laplacian, and Median, which can be used to
                    sharpen, smooth, and edge detect the images. The tool also
                    includes a preview feature that allows users to see the
                    changes in real-time before applying the filter to the final
                    image.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://olivertuesta.github.io/filtradoImagenes/"
                            isExternal
                        >
                            filtradoImagenes <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/oliverTuesta/filtradoImagenes"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        JavaScript, HTML, CSS
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/filtrado-imagenes_01.png"
                    alt="Filtrado de imágenes"
                />
                <WorkImage
                    src="/images/works/filtrado-imagenes_02.png"
                    alt="Filtrado de imágenes"
                />
                <WorkImage
                    src="/images/works/filtrado-imagenes_03.png"
                    alt="Filtrado de imágenes"
                />
                <WorkImage
                    src="/images/works/filtrado-imagenes_04.png"
                    alt="Filtrado de imágenes"
                />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/DRh1l9FuN9w?start=405"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
