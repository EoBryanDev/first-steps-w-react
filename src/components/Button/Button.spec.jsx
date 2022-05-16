/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react'
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });

    expect.assertions(1);

    expect(button).toBeInTheDocument();
  });
  it('should call a function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load More Posts/ });
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disable when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });


    expect(button).toBeDisabled();
  });
  it('should be enabled when disabled is false', () => {
    render(<Button text="Load More Posts" disabled={false} />);
    const button = screen.getByRole('button', { name: /Load More Posts/ });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const {container} = render(<Button text="Load More Posts" onClick={fn} />);


    expect(container.firstChild).toMatchSnapshot();
  })
});
