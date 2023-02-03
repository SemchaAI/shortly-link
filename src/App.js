import "./App.css";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { SecFooter } from "./components/SecFooter/SecFooter";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  return (
    <Container>
      <Header />
      <main className="main">
        <GetStarted />
        <Search />
        <Statistics />
      </main>
      <SecFooter />
    </Container>
  );
}

export default App;
