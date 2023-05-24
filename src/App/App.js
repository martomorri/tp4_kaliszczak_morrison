// import logo from './logo.svg';
import './App.css';
import Subtitle from './Subtitle/Subtitle';
import Input from './Input/Input';
import Cita from './Cita/Cita';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([
    {
      "mascota":"Nina",
      "propietario":"Martin",
      "fecha":"2021-08-05",
      "hora":"08:20",
      "sintomas":"Le duele la pierna"
    },
    {
      "mascota":"Sifon",
      "propietario":"Flecha",
      "fecha":"2023-08-05",
      "hora":"09:24",
      "sintomas":"Duerme mucho"
    },
    {
      "mascota":"Floki",
      "propietario":"Ari",
      "fecha":"2023-08-05",
      "hora":"16:15",
      "sintomas":"No está comiendo"
    }
  ]);
  const agregarCita = e => {
    e.preventDefault();
    setCitas(
      [
        ...citas,
        {
          mascota: e.target.mascota.value,
          propietario: e.target.propietario.value,
          fecha: e.target.fecha.value,
          hora:e.target.hora.value,
          sintomas: e.target.sintomas.value
        }
      ]
    );
    e.target.mascota.value = "";
    e.target.propietario.value = "";
    e.target.fecha.value = "";
    e.target.hora.value = "";
    e.target.sintomas.value = "";
  }

  const borrarCita = id => {
    setCitas(
      citas.filter(cita => citas.indexOf(cita) !== id)
    );
  }
  
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitle texto="Crear mi Cita" />
            <form onSubmit={(e) => agregarCita(e)}>
              <Input label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" />
              <Input label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño de la mascota" />
              <Input label="Fecha" type="date" name="fecha" />
              <Input label="hora" type="time" name="hora" />
              <Input label="Sintomas" type="textarea" name="sintomas" />
              <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
          <div className="one-half column">
            <Subtitle texto="Administra tus citas" />
            {citas.map(cita => 
            <div className="cita">
              <Cita nombre={cita.mascota} dueño={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} />
              <button onClick={() => borrarCita(citas.indexOf(cita))} className="button elimnar u-full-width">Eliminar ×</button>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
