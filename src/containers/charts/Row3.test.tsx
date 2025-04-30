
import { render, screen } from "@testing-library/react";
import Row3 from "./Row3";
import { useCountriesQuery } from "@/api/table-query";

// Mock the useCountriesQuery hook
jest.mock("@/api/table-query", () => ({
  useCountriesQuery: jest.fn(),
}));

describe("Row3 Component", () => {
  const mockCountryData = [
    {
      name: { common: "Country A" },
      population: 1000000,
      continents: ["Asia"],
    },
    {
      name: { common: "Country B" },
      population: 2000000,
      continents: ["Europe"],
    },
    {
      name: { common: "Country C" },
      population: 1500000,
      continents: ["Africa"],
    },
    {
      name: { common: "Country D" },
      population: 500000,
      continents: ["North America"],
    },
    {
      name: { common: "Country E" },
      population: 750000,
      continents: ["South America"],
    },
    {
      name: { common: "Country F" },
      population: 250000,
      continents: ["Oceania"],
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

//   test("renders the component with continent data", async () => {
//     render(<Row3 />);

//     // Wait for the charts to render (check for continent headings)
//     await waitFor(() => {
//       expect(screen.getByText("Asia")).toBeInTheDocument();
//       expect(screen.getByText("Europe")).toBeInTheDocument();
//       expect(screen.getByText("Africa")).toBeInTheDocument();
//       expect(screen.getByText("North America")).toBeInTheDocument();
//       expect(screen.getByText("South America")).toBeInTheDocument();
//       expect(screen.getByText("Oceania")).toBeInTheDocument();
//     });

//     // Add more specific assertions as needed, e.g., check for specific country names
//     expect(screen.getByText("Country A")).toBeInTheDocument();
//     expect(screen.getByText("Country B")).toBeInTheDocument();
//     expect(screen.getByText("Country C")).toBeInTheDocument();
//     expect(screen.getByText("Country D")).toBeInTheDocument();
//     expect(screen.getByText("Country E")).toBeInTheDocument();
//     expect(screen.getByText("Country F")).toBeInTheDocument();
//   });

  test('renders "No data available for [Continent]" when there is no data for a continent', () => {
    // Mock the useCountriesQuery hook to return no data
    (useCountriesQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(<Row3 />);

    // Check if the "No data available" message is displayed for each continent
    expect(screen.getByText("No data available for Asia")).toBeInTheDocument();
    expect(
      screen.getByText("No data available for Africa")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No data available for Europe")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No data available for North America")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No data available for South America")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No data available for Oceania")
    ).toBeInTheDocument();
  });
});
