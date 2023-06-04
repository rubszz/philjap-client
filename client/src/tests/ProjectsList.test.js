import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectsList from '../components/ProjectsList';
import axios from 'axios';

jest.mock('axios');

describe('ProjectsList', () => {
  it('fetches and displays projects', async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: '1',
          title: 'Project 1',
          description: 'Description 1',
          images: [
            {
              id: 'img1',
              imageUrl: 'http://image1.com',
              imageTitle: 'Image 1',
              imageDescription: 'Description 1',
            },
          ],
        },
      ],
    });
    
    render(<ProjectsList userId='1234' />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledWith('https://philjap-api.onrender.com/api/projects/1234'));

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });
});
