import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Renders Goggen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Goggen/i);
  expect(linkElement).toBeInTheDocument();
});
