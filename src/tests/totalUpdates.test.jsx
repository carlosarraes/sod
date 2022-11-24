import { render, screen } from '../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../components/Options';
import OrderEntry from '../pages/OrderEntry';

describe('totalUpdates', () => {
  it('Update scoop subtotal when scoops change', async () => {
    const user = userEvent.setup();
    render(<Options optionType='scoops' />);

    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');
  });

  it('Update scoop subtotal when toppings change', async () => {
    const user = userEvent.setup();
    render(<Options optionType='toppings' />);

    const toppingsSubtotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingsSubtotal).toHaveTextContent('0.00');

    const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
    await user.click(cherriesInput);
    expect(toppingsSubtotal).toHaveTextContent('1.50');

    const hfInput = await screen.findByRole('checkbox', { name: 'Hot fudge' });
    await user.click(hfInput);
    expect(toppingsSubtotal).toHaveTextContent('3.00');

    await user.click(cherriesInput);
    expect(toppingsSubtotal).toHaveTextContent('1.50');
  });
});

describe('Grand total', () => {
  it('Grand total updates properly if scoops is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i, level: 2 });
    expect(grandTotal).toHaveTextContent('0.00');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.type(vanillaInput, '1');
    expect(grandTotal).toHaveTextContent('2.00');

    const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
    await user.click(cherriesInput);
    expect(grandTotal).toHaveTextContent('3.50');
  });

  it('Grand total updates properly if toppings is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i, level: 2 });

    const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
    await user.click(cherriesInput);
    expect(grandTotal).toHaveTextContent('1.50');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');
  });

  it('Grand total updates properly if item is removed', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i, level: 2 });

    const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
    await user.click(cherriesInput);
    expect(grandTotal).toHaveTextContent('1.50');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');

    await user.type(vanillaInput, '0');
    expect(grandTotal).toHaveTextContent('1.50');

    await user.click(cherriesInput);
    expect(grandTotal).toHaveTextContent('0.00');
  });
});
