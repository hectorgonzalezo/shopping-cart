import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shop from '../Shop';

describe('Shop component', () => {
  it('Renders correctly', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('main')).toHaveAttribute('id', 'shop');
    expect(screen.container).toMatchSnapshot();
  });

  it('Clicking on a ShopItem takes you to that item display', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );

    const aHeading = screen.getByRole('link', { name: 'Teensy 2.0 16 MHz AVR 5V signals' });
    expect(aHeading.href).toBe('http://localhost/1');
    expect(screen.container).toMatchSnapshot();
  });

  it('Filtering by all keeps every item in screen', async () => {
    const filterItems = jest.fn();

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );

    const initialItems = screen.getAllByRole('article');
    const allButton = screen.getByRole('button', { name: /all/i });
    await userEvent.click(allButton);

    const items = screen.getAllByRole('article');

    expect(initialItems.length).toEqual(items.length);

    expect(screen.container).toMatchSnapshot();
  });

  it('The other filters reduce the number of elements', async () => {
    const filterItems = jest.fn();

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );

    const initialItems = screen.getAllByRole('article');
    const allButton = screen.getByRole('button', { name: /board/i });
    await userEvent.click(allButton);

    const items = screen.getAllByRole('article');

    expect(items.length).toBeLessThan(initialItems.length);

    expect(screen.container).toMatchSnapshot();
  });
});
