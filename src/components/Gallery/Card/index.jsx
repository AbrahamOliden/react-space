import styled from "styled-components";

const StyledFigure = styled.figure`
    width: ${props => props.$expand ? '90%' : '400px'};
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    margin: 0;
    & > img {
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        color: #FFF;
        padding: 16px 24px;
        border-radius: 0 0 20px 20px;
        box-sizing: border-box;
        h3 {
            font-size: 1.1rem;
            font-weight: 700;
            margin: 0 0 8px 0;
        }
        h4 {
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
        }
        div {
            position: absolute;
            display: flex;
            right: 24px;
            bottom: 24px;
            gap: 24px;
            button {
                background-color: #001634;
                border: none;
                text-align: center;
                font-size: 1rem;
                cursor: pointer;
            }
        }
    }
`;

function Card({ data=[], favActive, favInnactive, expandIcon, expand=false }) {

    const {titulo, fuente, path} = data;

    return (
        <StyledFigure $expand={expand} >
            <img src={path} alt={titulo} />
            <figcaption>
                <h3>{titulo}</h3>
                <h4>{fuente}</h4>
                <div>
                    <button>
                        <img src={favInnactive} alt="Favorite icon"/>
                    </button>
                    {!expand && <button>
                        <img src={expandIcon} alt="Expand icon"/>
                    </button>}
                    
                </div>
            </figcaption>
        </StyledFigure>
    )
};

export default Card;