import styled from "styled-components";
import Tag from "./Tags";
import Title from "../Title";
import Populars from "./Populars";
import Card from "./Card";
import fav from '/iconos/favorito.png';
import expand from "/iconos/expandir.png";

const GalleryContainer = styled.div`
    display: flex;
`;

const MainGallery = styled.section`
    flex-grow: 1;
`;

function Gallery({ images }) {

    return (
        <>
            <Tag />
            <GalleryContainer>
                <MainGallery>
                    <Title>Search through the gallery</Title>
                    {images.map( image => {
                        return <Card data={image} fav={fav} expand={expand}></Card>
                    })}
                </MainGallery>

                <Populars />
            </GalleryContainer>
        </>
    );
};

export default Gallery;