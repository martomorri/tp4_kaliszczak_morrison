// import logo from './logo.svg';
import './App.css';
import OneHalfColumn from './OneHalfColumn/OneHalfColumn';
import Subtitle from './Subtitle/Subtitle';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitle texto="Crear mi Cita" />
          </div>
          <div class="one-half column">
            <Subtitle texto="Administra tus citas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
