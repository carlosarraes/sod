import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/OrderEntry';
import OrderSummary from './pages/OrderSummary';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
    <Container>
      <h1>Sundae App</h1>
      <OrderDetailsProvider>
        <OrderEntry />
        <OrderSummary />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
