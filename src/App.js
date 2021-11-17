import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

// Redux
import store from './store'
import { Provider } from 'react-redux'

// Components
import Credits from './components/Credits';
import Chat from './components/chat';

function App() {
  return (
    <Provider store={ store }>
      <Container className="py-5">
        <Row>
          <Col sm="12" md="12" lg="4" className="p-1">
            <Credits />
          </Col>
          <Col sm="12" md="12" lg="8" className="p-1">
            <Chat />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
