import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="d-flex contenido">
        <Container as="main" ClassNam="fondo-contenedor vw-75">
          <Row as="ul" sm={3} lg={4} ClassNam="list-unstyled row row-cols-3 row-cols-lg-4">
            <li>
              <button ClassNam="boton gt30 p-3" type="button">Equipos asigndos a mayores de 30</button>
            </li>
            <li>
              <button ClassNam="boton tarragona p-3" type="button">Equipos asignados a personas de Tarragona</button>
            </li>
            <li>
              <button ClassNam="boton provincias p-3" type="button">Provincias donde hay equipos</button>
            </li>
            <li>
              <button ClassNam="boton puestos p-3" type="button">Puestos de trabajadores con equipo</button>
            </li>
            <li>
              <button ClassNam="boton edad-media p-3" type="button">Media de edad de los trabajadores</button>
            </li>
            <li>
              <button ClassNam="boton orden-edad p-3" type="button">Equipos ordenados por edad</button>
            </li>
            <li>
              <button ClassNam="boton sobremesa p-3" type="button">Equipos de tipo sobremesa</button>
            </li>
            <li>
              <button ClassNam="boton trabajadores-portatil p-3" type="button">Trabajadores con equipo portátil</button>
            </li>
            <li>
              <button ClassNam="boton equipos-tipo p-3" type="button">Equipos organizados por tipo</button>
            </li>
            <li>
              <button ClassNam="boton portatiles-tarragona p-3" type="button">Equipos portátiles asignados en
            Tarragona</button>
            </li>
            <li>
              <button ClassNam="boton resumen p-3" type="button">Resumen de equipos asignados</button>
            </li>
          </Row>
        </Container>
        <Col as="aside">
          <div ClassNam="consola consola-size"></div>
        </Col>
      </div>
    </>
  );
}

export default App;
