import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ItemDisplay from '../ItemDisplay';

// mock function used to mimick id parameter
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
}));

describe('Item Display component', () => {
  it('Renders correctly', () => {
    const mockFunc = jest.fn();
    render(<ItemDisplay addToCart={mockFunc} />);

    const itemDisplayed = screen.getByRole('article');

    expect(itemDisplayed).toBeInTheDocument();
    expect(screen.container).toMatchSnapshot();
  });

  it('Calls add to cart', () => {
    const mockFunc = jest.fn((e) => e.preventDefault());
    render(<ItemDisplay addToCart={mockFunc} />);

    const addButton = screen.getByRole('button');

    userEvent.click(addButton);

    expect(mockFunc).toBeCalled();
  });

  it('Starts number of items at 1', () => {
    const mockFunc = jest.fn((e) => e.preventDefault());
    render(<ItemDisplay addToCart={mockFunc} />);

    const numItemsInput = screen.getByRole('spinbutton');

    expect(numItemsInput).toBeInTheDocument();
    expect(numItemsInput).toHaveValue(1);
  });

  it('Writing a different value updates it', () => {
    const mockFunc = jest.fn((e) => e.preventDefault());
    render(<ItemDisplay addToCart={mockFunc} />);

    const numItemsInput = screen.getByRole('spinbutton');

    userEvent.type(numItemsInput, '{backspace}3');

    expect(numItemsInput).toHaveValue(3);
  });
});