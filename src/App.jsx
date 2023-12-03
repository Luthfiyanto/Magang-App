import ListMitra from "./ListMitra";
import Filter from "./Filter";
import Jumbotron from "./Jumbotron";

function App() {
  return (
    <>
      <Jumbotron />
      <main className="m-5">
        <Filter />
        <ListMitra />
      </main>
    </>
  );
}

export default App;
