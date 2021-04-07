import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Almacenar todas las citas:
  const [citas, guardarCitas] = useState(
    JSON.parse(localStorage.getItem("citas"))
  );

  //UseEffect para realizar ciertas opreciones cunado el state cambia:
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  //Función que tome las citas actuales y agrege la nueva:
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Eliminar Cita:
  const eliminarCita = (id) => {
    const nuevaCita = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevaCita);
  };

  //Mensaje de Inicio:
  const titulo =
    citas.length === 0 ? "Agrega Citas" : "Administra Citas";

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}




export default App;
