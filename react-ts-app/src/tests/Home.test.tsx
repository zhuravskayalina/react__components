import { render, screen } from '@testing-library/react';
import Home from '../components/Home/Home';

describe('Home', () => {
  it('Renders heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/Featured Paintings/i);
  });
});
