import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import InputField from "./components/InputField"

const GradientBackground = styled.div`
background: linear-gradient(175deg, 
  #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
`

function App() {

  return (
    <>
      <GradientBackground>
        <GlobalStyle />
        <Header />
        <InputField />
      </GradientBackground>
    </>
  )
}

export default App
