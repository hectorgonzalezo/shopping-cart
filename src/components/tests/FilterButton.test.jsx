import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FilterButton from '../FilterButton';

describe('Filter Button component', () => {
  it('Renders correctly', () => {
    const mockFunc = jest.fn();
    render(<FilterButton type="board" onClick={mockFunc} />);

    const button = screen.getByRole('button');
    // The button's text should be capitalized
    const text = screen.getByText('Board');

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('Runs its callback function', () => {
    const mockFunc = jest.fn();
    render(<FilterButton type="board" onClick={mockFunc} />);

    userEvent.click(screen.getByRole('button'));
    expect(mockFunc).toBeCalled();
  });
});
