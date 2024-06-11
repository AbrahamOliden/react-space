import styled from "styled-components";
import Tag from "./Tags";
import Title from "../Title";
import Populars from "./Populars";

const GalleryContainer = styled.div`
    display: flex;
`;

const MainGallery = styled.section`
    flex-grow: 1;
`;

function Gallery() {
    return (
        <>
            <Tag />
            <GalleryContainer>
                <MainGallery>
                    <Title>Search through the gallery</Title>

                </MainGallery>

                <Populars />
            </GalleryContainer>
        </>
    );
};

export default Gallery;