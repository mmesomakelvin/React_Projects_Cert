import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EliteBridge Learning heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/EliteBridge Learning/i);
  expect(headingElement).toBeInTheDocument();
});
