function App() {
  return (
    <>
      <div class="d-flex">
        <main class="container fondo-contenedor vw-75">
          <ul class="list-unstyled row row-cols-3 row-cols-lg-4">
            <li>
              <button class="boton gt30 p-3" type="button">Equipos asigndos a mayores de 30</button>
            </li>
            <li>
              <button class="boton tarragona p-3" type="button">Equipos asignados a personas de Tarragona</button>
            </li>
            <li>
              <button class="boton provincias p-3" type="button">Provincias donde hay equipos</button>
            </li>
            <li>
              <button class="boton puestos p-3" type="button">Puestos de trabajadores con equipo</button>
            </li>
            <li>
              <button class="boton edad-media p-3" type="button">Media de edad de los trabajadores</button>
            </li>
            <li>
              <button class="boton orden-edad p-3" type="button">Equipos ordenados por edad</button>
            </li>
            <li>
              <button class="boton sobremesa p-3" type="button">Equipos de tipo sobremesa</button>
            </li>
            <li>
              <button class="boton trabajadores-portatil p-3" type="button">Trabajadores con equipo portátil</button>
            </li>
            <li>
              <button class="boton equipos-tipo p-3" type="button">Equipos organizados por tipo</button>
            </li>
            <li>
              <button class="boton portatiles-tarragona p-3" type="button">Equipos portátiles asignados en
            Tarragona</button>
            </li>
            <li>
              <button class="boton resumen p-3" type="button">Resumen de equipos asignados</button>
            </li>
          </ul>
        </main>
        <aside>
          <div class="consola consola-size"></div>
        </aside>
      </div>
    </>
  );
}

export default App;
