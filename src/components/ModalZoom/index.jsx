import styled from 'styled-components';
import Card from '../Gallery/Card'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 300px;
    width: 80%;
    padding: 0;
    border-radius: 25px;
    &>form {
        width: fit-content;
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: transparent;
        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
`

function ModalZoom({ photo, favorite, onClose }) {
    return <>
    {photo && <>
        <Overlay />
        <StyledDialog open={!!photo}>
            <Card 
                data={photo} 
                expand={true}
                favorite={favorite}/>
            <form method="dialog">
                <button onClick={onClose}>
                    <img src="/iconos/cerrar.png" alt="close button" />
                </button>
            </form>
        </StyledDialog>
    
    </>


    }
    </>
};

export default ModalZoom;