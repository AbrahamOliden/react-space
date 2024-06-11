import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import backgroundImage from './assets/banner.png'

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

function App() {

  return (
    <>
      <GradientBackground>
        <GlobalStyle />
        <Header />
        <AppContainer>
          <MainContainer>
            <SideBar />
            <Banner text={'The most complete space photos gallery'} backgroundImage={backgroundImage} />
          </MainContainer>
        </AppContainer>
        
      </GradientBackground>
    </>
  )
}

export default App
