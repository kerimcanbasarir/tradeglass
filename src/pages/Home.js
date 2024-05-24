import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../view/header/Header";
import MainContainer from "../view/mainContainer/MainContainer";
import MainContent from "../view/mainContent/MainContent";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <MainContent />
      </MainContainer>
    </>
  );
}

export default Home;
