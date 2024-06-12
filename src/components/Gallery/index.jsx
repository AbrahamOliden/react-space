import styled from "styled-components";
import Tag from "./Tags";
import Title from "../Title";
import Populars from "./Populars";
import Card from "./Card";
import favActive from "/iconos/favorito-activo.png";

const GalleryContainer = styled.div`
    display: flex;
`;

const MainGallery = styled.section`
    flex-grow: 1;
`;

const CardsContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 24px;
`;

const PopularsContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
`;

function Gallery({ images=[], selectPhoto }) {

    return (
        <>
            <Tag />
            <GalleryContainer id="Galeria" >
                <MainGallery>
                    <Title>Search through the gallery</Title>
                    <CardsContainer>
                    {images.map( image => {
                        return <Card key={image.id} 
                            data={image}
                            onZoom={selectPhoto} 
                            favActive={favActive}>
                        </Card>
                    })}
                    </CardsContainer>
                </MainGallery>
                <PopularsContainer>
                    <Populars />
                </PopularsContainer>

            </GalleryContainer>
        </>
    );
};

export default Gallery;