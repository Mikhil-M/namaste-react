import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard, { withHighlyRatedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Top Form - Chevayoor");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardHighlyRated = withHighlyRatedLabel(RestaurantCard);
  render(<RestaurantCardHighlyRated resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Highly Rated");

  expect(promotedLabel).toBeInTheDocument();
});
