import Card from "./components/Card";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <main>
        <Titulo />

        <p>
          Defina seus objetivos, acompanhe seu progresso e transforme seus
          sonhos <br /> em realidade.
        </p>

        <div className={"cards"}>
          <div className={"cardPessoal"}>
            <Card title="Pessoal" />
          </div>

          <div className={"cardCarreira"}>
            <Card title="Carreira" />
          </div>
        </div>
      </main>

      <footer>O futuro pertence aqueles que acreditam nos seus sonhos!</footer>
    </>
  );
}

export default App;
