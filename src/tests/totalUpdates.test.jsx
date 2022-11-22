import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../components/Options';

describe('totalUpdates', () => {
  it('update scoop subtotal when scoops change', async () => {
    const user = userEvent.setup();
    render(<Options optionType='scoops' />);

    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    await user.clear();
    await user.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    await user.clear();
    await user.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');
  });
});
