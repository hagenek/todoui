import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Goggen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Goggen/i);
  expect(linkElement).toBeInTheDocument();
});

