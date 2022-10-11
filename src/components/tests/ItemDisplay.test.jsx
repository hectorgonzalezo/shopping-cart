import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
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
    render(<ItemDisplay />);

    const itemDisplayed = screen.getByRole('article');

    expect(itemDisplayed).toBeInTheDocument();
    expect(screen.container).toMatchSnapshot();
  });
});