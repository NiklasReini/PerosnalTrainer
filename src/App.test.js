import { render, screen } from '@testing-library/react';
import App from './App';

test('renderslearnreactlink', () => {
  const{ getByText} = render(<App/>);
  const linkElement= getByText(/learnreact/i);
  expect(linkElement).toBeInTheDocument();
});