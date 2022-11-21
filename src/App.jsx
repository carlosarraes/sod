import Options from './components/Options';
import OrderSummary from './pages/OrderSummary';

function App() {
  return (
    <div>
      <h1>Sundae App</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <OrderSummary />
    </div>
  );
}

export default App;
