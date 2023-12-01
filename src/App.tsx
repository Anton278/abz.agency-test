import Header from "./components/business/Header";
import TopSection from "./components/business/TopSection";
import Container from "./components/UI/Container";
import UsersSection from "./components/business/UsersSection";
import RegisterSection from "./components/business/RegisterSection";

import s from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <TopSection />
        <Container>
          <UsersSection />
          <RegisterSection />
        </Container>
      </main>
    </>
  );
}

export default App;
