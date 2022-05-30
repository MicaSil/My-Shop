
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <ItemListContainer greeting="Bienvenidos a mi tienda" />
      </header>
    </div>
  );
}

export default App;
