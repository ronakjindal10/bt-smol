import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign in with Google/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sign up button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign up with Google/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders contact list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contacts/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders karma button', () => {
  render(<App />);
  const linkElement = screen.getByText(/BT/i);
  expect(linkElement).toBeInTheDocument();
});