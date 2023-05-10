// import logo from './logo.svg';
import './App.css';
import Subtitle from './Subtitle/Subtitle';
import Input from './Input/Input';
import Cita from './Cita/Cita';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitle texto="Crear mi Cita" />
            <Input label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" />
            <Input label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño de la mascota" />
            <Input label="Fecha" type="date" name="fecha" />
            <Input label="hora" type="time" name="hora" />
            <Input label="Sintomas" type="textarea" name="sintomas" />
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
          </div>
          <div class="one-half column">
            <Subtitle texto="Administra tus citas" />
            <Cita nombre="Nina" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cita nombre="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
