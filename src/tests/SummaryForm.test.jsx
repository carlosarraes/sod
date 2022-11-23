import { render, screen } from '../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../components/SummaryForm';

describe('Test SummaryForm component', () => {
  test('if button starts disabled and enables when checkbox is clicked', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const sfCheck = screen.getByRole('checkbox', { name: /i agree to the terms of service/i });
    const sfBtn = screen.getByRole('button', { name: /confirm order/i });

    expect(sfCheck).not.toBeChecked();
    expect(sfBtn).toBeDisabled();
    await user.click(sfCheck);
    expect(sfBtn).toBeEnabled();
    await user.click(sfCheck);
    expect(sfBtn).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

    expect(nullPopover).not.toBeInTheDocument();
    const tac = screen.getByText(/terms of service/i);
    await user.hover(tac);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();
    await user.unhover(tac);
    expect(popover).not.toBeInTheDocument();
  });
});
