import "bootstrap/dist/css/bootstrap.min.css";
import SubNavbar from "../view/subNavbar/SubNavbar";

import MainContainer from "../view/mainContainer/MainContainer";
import DetailsContent from "../view/detailsContent/DetailsContent";
import Header from "../view/header/Header";
function Details() {
  return (
    <>
      <Header />
      <MainContainer>
        <SubNavbar />
        <DetailsContent />
      </MainContainer>
    </>
  );
}

export default Details;
