import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    margin-top: 56px;
    font-size: 1.2rem;
    color: #FFF;
`;

const StyledButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 10px 12px;
    background-color: rgba(217, 217, 217, 0.3);
    color: #FFF;
    font-size: 1.2rem;
    border: ${props => props.$active ? '2px solid #C98CF1' : 'none'};
    border-radius: 10px;
    box-sizing: border-box;
`

function Tag() {
    console.log(tags);
    return <TagsContainer>
    <p>Search by tags:</p>

    {tags.map( tag => {
        return <StyledButton key={tag.id} $active={false}>{tag.titulo}</StyledButton>
    })}
    </TagsContainer> 
};

export default Tag;