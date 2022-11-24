import Options from '../components/Options';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../contexts/OrderDetails';
import { formatCurrency } from '../utilities';

const OrderEntry = () => {
  const {
    totals: { scoops, toppings },
  } = useOrderDetails();
  const total = scoops + toppings;

  return (
    <main>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {formatCurrency(total)}</h2>
      <Button variant='secondary'>Order Sundae</Button>
    </main>
  );
};

export default OrderEntry;
