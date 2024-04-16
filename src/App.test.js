import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app main component', () => {
  render(<App />);
  const rootElement = screen.getByTestId('app-home');
  expect(rootElement).toBeInTheDocument();
});
