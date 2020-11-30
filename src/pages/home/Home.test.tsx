import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

jest.mock('./posts/posts', () => ({ Posts: () => 'Posts' }));

describe('<Home />', () => {
  test('should render with heading and <Posts />', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        name: /redux toolkit typescript example/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});
