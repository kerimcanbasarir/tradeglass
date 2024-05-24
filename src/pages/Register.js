import Header from "../view/header/Header";
import RegisterContent from "../view/registerContent/RegisterContent";
import MainContainer from "../view/mainContainer/MainContainer";

function Register() {
  return (
    <>
      <Header />
      <MainContainer>
        <RegisterContent />
      </MainContainer>
    </>
  );
}

export default Register;
