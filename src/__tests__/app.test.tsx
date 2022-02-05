import { render } from '@testing-library/react';
import { App } from '../app';

test('renders app', () => {
  const { container } = render(<App />);

  expect(container).not.toBeNull();
});
