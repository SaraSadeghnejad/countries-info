
import { render, screen } from "@testing-library/react";
import Row1 from "./Row1";
import { useCountriesQuery } from "@/api/table-query";

// Mock the useCountriesQuery hook
jest.mock("@/api/table-query", () => ({
  useCountriesQuery: jest.fn(),
}));

describe("Row1 Component", () => {
  const mockCountryData = [
    {
      name: { common: "Country A" },
      population: 1000000,
      area: 1000,
      continents: "Asia",
    },
    {
      name: { common: "Country B" },
      population: 2000000,
      area: 2000,
      continents: "Europe",
    },
  ];

  beforeEach(() => {
    // Mock the useCountriesQuery hook to return our mock data
    (useCountriesQuery as jest.Mock).mockReturnValue({
      data: mockCountryData,
      isLoading: false,
      isError: false,
    });
  });


  test('renders "Loading data..." when data is not yet available', () => {
    // Mock the useCountriesQuery hook to return no data initially
    (useCountriesQuery as jest.Mock).mockReturnValue({
      data: null, // or undefined
      isLoading: true,
      isError: false,
    });

    render(<Row1 />);

    // Check if the loading message is displayed
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });



});
