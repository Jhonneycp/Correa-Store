import './App.css';
import NavBar from './components/NavBar'
import ItemsListContainer from './components/ItemsListContainer'


function App() {

  const links = ['inicio', 'perfil', 'contacto']
  const Items = 5
  const Productos = ['excellent' , 'catchow', 'puppys']


  return (
    <div className='App'>
      <NavBar links={links} Items={Items}/>
      <ItemsListContainer Productos={Productos} />
    </div>
  );
}

export default App;
