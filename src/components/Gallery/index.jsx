import styled from "styled-components";
import Tag from "./Tags";
import Title from "../Title";
import Populars from "./Populars";
import Card from "./Card";
import favActive from "/iconos/favorito-activo.png";
import favInnactive from '/iconos/favorito.png';
import expand from "/iconos/expandir.png";

const GalleryContainer = styled.div`
    display: flex;
`;

const MainGallery = styled.section`
    flex-grow: 1;
`;

const CardContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 24px;
`

function Gallery({ images }) {

    return (
        <>
            <Tag />
            <GalleryContainer>
                <MainGallery>
                    <Title>Search through the gallery</Title>
                    <CardContainer>
                    {images.map( image => {
                        return <Card key={image.id} 
                            data={image} 
                            favActive={favActive} 
                            favInnactive={favInnactive} 
                            expand={expand}>
                        </Card>
                    })}
                    </CardContainer>
                </MainGallery>

                <Populars />
            </GalleryContainer>
        </>
    );
};

export default Gallery;