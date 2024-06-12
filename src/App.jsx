import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import backgroundImage from './assets/banner.png'
import Gallery from "./components/Gallery"
import photos from "./fotos.json";
import ModalZoom from "./components/ModalZoom";
import { useEffect, useState } from "react";

const GradientBackground = styled.div`
  background: linear-gradient(175deg, 
    #041833 4.16%, 
    #04244F 48%, 
    #154580 96.76%);
  min-height: 100vh;
  padding: 60px 24px;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  flex-grow: 1;
`;

function App() {

  const [images, setImages] = useState(photos);
  const [selectedPhoto, SetSelectedPhoto] = useState(null);

  const favorite = (photo) => {
    setImages(photos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id 
          ? !photo.favorite
          : photo.favorite
      };
    }));
  };

  return (
    <>
      <GradientBackground>
        <GlobalStyle />
        <Header />
        <AppContainer>

          <MainContainer>

            <SideBar />
            <SectionContainer>

              <Banner 
                text={'The most complete space photos gallery'} 
                backgroundImage={backgroundImage} />
              <Gallery 
                selectPhoto={photo => SetSelectedPhoto(photo)} 
                images={images} 
                favorite={favorite}/>

            </SectionContainer>
          </MainContainer>
        </AppContainer>
        <ModalZoom photo={selectedPhoto}/>
        
      </GradientBackground>
    </>
  )
}

export default App
