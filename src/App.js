//import logo from "./logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import ListForItem from "./Components/ListForItem/ListForItem";
import FormTask from "./Components/FormTask/FormTask";
import Menu from "./Components/Menu/Menu";
import GoalButton from "./Components/GoalButton/GoalButton";

function App() {
  return (
    <div className="App">
      <Menu />
      <Container className="centered-container">
        <Row>
          <Col xs={12} md={6} className="d-none d-sm-block d-sm-none d-md-block " >
            <FormTask />
          </Col>
          <Col xs={12} md={6}>
            <Row className="d-md-none">
              <div className="bg-transparent overlapping-div ">
                <GoalButton className="float-left" />
              </div>
            </Row>
            <ListForItem />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
