import React from 'react';
import { render, screen } from '@testing-library/react';
import { Posts } from './posts';

jest.mock('./create-post/create-post', () => ({
  CreatePost: () => 'CreatePost',
}));
jest.mock('./view-post/view-posts', () => ({
  ViewPost: () => 'ViewPost',
}));

describe('<Home />', () => {
  test('should render with <CreatePost /> and <ViewPost />', async () => {
    render(<Posts />);
    expect(screen.getByText('CreatePost')).toBeInTheDocument();
    expect(screen.getByText('ViewPost')).toBeInTheDocument();
  });
});
