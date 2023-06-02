import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <Header/>
      <ItemListContainer 
      greeting="Bienvenid@ a mi E-commerce :D"
      />
    </>
  );
}

export default App;
