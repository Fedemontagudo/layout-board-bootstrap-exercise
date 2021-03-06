import { Col, Container, Row, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="d-flex contenido">
        <Container as="main" className="fondo-contenedor vw-75">
          <Row as="ul" sm={3} lg={4} className="list-unstyled">
            <li>
              <Button id="boton" className="boton gt30 p-3" variant="warning" type="button">Equipos asigndos a mayores de 30</Button>
            </li>
            <li>
              <Button className="boton tarragona p-3" variant="warning" type="button">Equipos asignados a personas de Tarragona</Button>
            </li>
            <li>
              <Button className="boton provincias p-3" variant="warning" type="button">Provincias donde hay equipos</Button>
            </li>
            <li>
              <Button className="boton puestos p-3" variant="warning" type="button">Puestos de trabajadores con equipo</Button>
            </li>
            <li>
              <Button className="boton edad-media p-3" variant="warning" type="button">Media de edad de los trabajadores</Button>
            </li>
            <li>
              <Button className="boton orden-edad p-3" variant="warning" type="button">Equipos ordenados por edad</Button>
            </li>
            <li>
              <Button className="boton sobremesa p-3" variant="warning" type="button">Equipos de tipo sobremesa</Button>
            </li>
            <li>
              <Button className="boton trabajadores-portatil p-3" variant="warning" type="button">Trabajadores con equipo portátil</Button>
            </li>
            <li>
              <Button className="boton equipos-tipo p-3" variant="warning" type="button">Equipos organizados por tipo</Button>
            </li>
            <li>
              <Button className="boton portatiles-tarragona p-3" variant="warning" type="button">Equipos portátiles asignados en
            Tarragona</Button>
            </li>
            <li>
              <Button className="boton resumen p-3" variant="warning" type="button">Resumen de equipos asignados</Button>
            </li>
          </Row>
        </Container>
        <Row as="aside" className="lateral">
          <div className="consola consola-size"></div>
        </Row>
      </div>
    </>
  );
}

export default App;
