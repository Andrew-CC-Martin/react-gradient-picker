import { render } from '@testing-library/react';
import App from './App';

// This test is more valuable that it looks
// It will fail if React strict mode doesn't like anything
// Eg if you forget to pass a key to mapped components
test('renders app', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
