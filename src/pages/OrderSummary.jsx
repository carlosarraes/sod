import SummaryForm from '../components/SummaryForm';
import { useOrderDetails } from '../contexts/OrderDetails';
import { formatCurrency } from '../utilities';

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.keys(optionCounts.toppings);
  const toppingList = toppingArray.map((key) => <li key={key}>{key}</li>);

  return (
    <section>
      <h4>Order Summary</h4>
      <h5>Scoops: {formatCurrency(totals.scoops)}</h5>
      <ul>{scoopList}</ul>
      <h5>Toppings: {formatCurrency(totals.toppings)}</h5>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </section>
  );
};

export default OrderSummary;
