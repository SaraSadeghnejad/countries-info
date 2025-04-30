
import { render, screen } from '@testing-library/react';
import Row2 from './Row2';
import { useCountriesQuery } from '@/api/table-query';

// Mock the useCountriesQuery hook
jest.mock('@/api/table-query', () => ({
  useCountriesQuery: jest.fn(),
}));

describe('Row2 Component', () => {
  const mockCountryData = [
    {
      name: { common: 'Brazil' },
      population: 1000000,
      area: 1000,
      continents: 'Asia',
    },
    {
      name: { common: 'Peru' },
      population: 2000000,
      area: 2000,
      continents: 'Europe',
    },
  ];

  beforeEach(() => {
    // Mock the useCountriesQuery hook to return our mock data
    (useCountriesQuery as unknown as  jest.Mock).mockReturnValue({
      data: mockCountryData,
      isLoading: false,
      isError: false,
    });
  });


  test('renders "Select two countries to compare." when no countries are selected', () => {
    render(<Row2 />);
    expect(screen.getByText('Select two countries to compare.')).toBeInTheDocument();
  });
});