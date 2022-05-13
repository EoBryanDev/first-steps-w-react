import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text', () => {
    render(<Button text="Load More Posts" />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });

    expect.assertions(1);

    expect(button).toBeInTheDocument();
  });
  it('should call a function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load More Posts/ });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disable when disabled is true', () => {
    render(<Button text="Load More Posts" disabled={true} />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });


    expect(button).toBeDisabled();
  });
  it('should be enabled when disabled is false', () => {
    render(<Button text="Load More Posts" disabled={false} />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });

    expect(button).toBeEnabled();
  });
});