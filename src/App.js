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
          <Col sm="4">
            <Credits />
          </Col>
          <Col sm="8">
            <Chat />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
