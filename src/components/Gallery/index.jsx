import styled from "styled-components";
import Tag from "./Tags";
import Title from "../Title";
import Populars from "./Populars";

const ImagesContainer = styled.div`
    display: flex;
`;

const WTFIsHeDoing = styled.section`
    flex-grow: 1;
`;

function Gallery() {
    return (
        <>
            <Tag />
            <ImagesContainer>
                <WTFIsHeDoing>
                    <Title>Search through the gallery</Title>

                </WTFIsHeDoing>

                <Populars />
            </ImagesContainer>
        </>
    );
};

export default Gallery;