import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Res List for Pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restautants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(resCardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const resCardsAfterFilter = screen.getAllByTestId("resCard");

  expect(resCardsAfterFilter.length).toBe(4);
});
