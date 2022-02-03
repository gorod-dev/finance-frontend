import { render } from '@testing-library/react';
import { App } from '../app';

test('renders app', () => {
  const { getByRole } = render(<App />);

  expect(getByRole('main')).toBeInTheDocument();
});
