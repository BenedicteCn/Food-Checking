import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Food Checking/i);
  expect(linkElement).toBeInTheDocument();
});