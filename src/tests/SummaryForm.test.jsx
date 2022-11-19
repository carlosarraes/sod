import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../components/SummaryForm';

describe('Test SummaryForm component', () => {
  test('if button starts disabled and enables when checkbox is clicked', () => {
    render(<SummaryForm />);
    const sfCheck = screen.getByRole('checkbox', { name: /i agree to the terms of service/i });
    const sfBtn = screen.getByRole('button', { name: /confirm order/i });

    expect(sfCheck).not.toBeChecked();
    expect(sfBtn).toBeDisabled();
    fireEvent.click(sfCheck);
    expect(sfBtn).toBeEnabled();
    fireEvent.click(sfCheck);
    expect(sfBtn).toBeDisabled();
  });
});
