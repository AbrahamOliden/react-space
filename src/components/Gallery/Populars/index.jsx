import Title from "../../Title";
import styled from "styled-components";
import photos from '../fotos-populares.json';

const PopularSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
`;

const PopularImage = styled.img`
    max-width: 200px;
    border-radius: 20px;
`;

const Button = styled.button`
    width: 100%;
    background-color: transparent;
    color: #FFF;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
    padding: 15px 30px;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    cursor: pointer;
`;

function Populars() {
    return (
    <>
        <Title $align={'center'} >Populars</Title>
        <PopularSection>
            {
            photos.map(photo => (
                <PopularImage 
                    src={photo.path} 
                    alt={photo.alt} 
                    key={photo.id} />
            ))
            }
            <Button>See more</Button>
        </PopularSection>
    </>
    );
};

export default Populars;