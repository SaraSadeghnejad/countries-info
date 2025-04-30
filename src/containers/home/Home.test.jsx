import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
  import HomeContainer from "./home-container"; // Assuming your component is in a file named "page.tsx"
    import { useLogic } from "./useLogic";
// Mock the useLogic hook
jest.mock("./useLogic", () => ({
  useLogic: jest.fn(),
}));

// Mock the DataTable component to avoid rendering its implementation details
jest.mock("@/components/table/data-table", () => ({
  DataTable: ({ columns, data }) => (
    <div data-testid="data-table">
      Mock DataTable: {data ? data.length : 0} items
    </div>
  ),
}));

// Mock the Loader component
jest.mock("@/components/Loader.tsx", () => ({
  __esModule: true, // Important for default exports
  default: () => <div data-testid="loader">Mock Loader</div>,
}));

describe("HomeContainer Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Loader when draftData is initially empty or undefined", () => {
    useLogic.mockReturnValue({
      columnsCell: [],
      draftData: null,
      data: [],
    });

    render(<HomeContainer />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders DataTable when draftData has data", () => {
    const mockDraftData = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    useLogic.mockReturnValue({
      columnsCell: [{ header: "Name", accessorKey: "name" }],
      draftData: mockDraftData,
      data: [],
    });

    render(<HomeContainer />);

    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });

  it("renders DataTable with the correct number of items", () => {
    const mockDraftData = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ];
    useLogic.mockReturnValue({
      columnsCell: [{ header: "Name", accessorKey: "name" }],
      draftData: mockDraftData,
      data: [],
    });

    render(<HomeContainer />);

    expect(screen.getByTestId("data-table")).toHaveTextContent(
      "Mock DataTable: 3 items"
    );
  });


});
