import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "./Components/ItemList/ItemList";
import ItemForm from "./Components/ItemForm/ItemForm";
import Menu from "./Components/Menu/Menu";
import AddButton from "./Components/AddButton/AddButton";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { showAlert, hideAlert } from "./reducers/alertSlice";
import "./App.scss";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleShowAlert = (type, message) => {
    dispatch(showAlert({ type, message }));
    const timer = setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleCloseAlert = () => {
    console.log("Closing alert...");
    dispatch(hideAlert());
  };  

  return (
    <div className="App">
      <Menu />
      <div className="alert-container">
        {alert.show && (
          <Alert variant={alert.type} onClose={handleCloseAlert} dismissible>
            {alert.message}
          </Alert>
        )}
      </div>
      <Container className="centered-container">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-none d-sm-block d-sm-none d-md-block "
          >
            <ItemForm onAdd={handleShowAlert} />
          </Col>
          <Col xs={12} md={6}>
            <Row className="d-md-none">
              <div className="bg-transparent overlapping-div ">
                <AddButton className="float-left" />
              </div>
            </Row>
            <ItemList onDelete={handleShowAlert} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
