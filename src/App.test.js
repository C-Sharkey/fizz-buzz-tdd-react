import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Check for header
test('renders header: "FizzBuzz TDD" ', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/FizzBuzz TDD/i);
  expect(headerElement).toBeInTheDocument();
});

// render a list of numbers 1 to 100

// divisible by 3 shoud render 'Fizz'

// divisible by 5 should render 'buzz'

// divisible by both should render 'FizzBuzz'