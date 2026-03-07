import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  // App renders without crashing
  expect(document.body).toBeInTheDocument();
});
