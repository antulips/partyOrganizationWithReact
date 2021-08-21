import '../style/App.css';
import '../style/Components.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {
  const invitados = [
    {nombre:"Nicolas", estaEnLista:true, tarea:"papas fritas"},
    {nombre:"Ivan", estaEnLista:false, tarea:"pizzas"},
    {nombre:"Carolina", estaEnLista:true, tarea:"bebidas"}]

  return (
    <div className="App">
      <h3>Invitades:</h3>
        <ul>{invitados.map((invitado, index) =><li><ClassComponent nombre={invitado.nombre} estaEnLista={invitado.estaEnLista} key={index} /></li>)}</ul>
      <h3>Tareas: </h3>
        <ul>{invitados.map((invitado, index) =><li><FunctionComponent nombre={invitado.nombre} tarea={invitado.tarea} key={index} /></li>)}</ul>
    </div>
  );
}

export default App;
