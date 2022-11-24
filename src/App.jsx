import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
    <OrderDetailsProvider>
      <Container>
        <h1>Sundae App</h1>
        <OrderEntry />
      </Container>
    </OrderDetailsProvider>
  );
}

export default App;
