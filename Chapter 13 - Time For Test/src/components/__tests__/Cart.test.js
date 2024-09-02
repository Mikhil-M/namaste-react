import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import Cart from "../Cart";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu component", async () => {
  await act(async () => render(<RestaurantMenu />));

  const accordianHeader = screen.getByText("Soups(5)");

  expect(accordianHeader).toBeInTheDocument();
});

it("Should load Restaurant Menu component with soups accordian opened", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Soups(5)");

  fireEvent.click(accordianHeader);

  const itemsInAccordian = screen.getAllByTestId("foodItem");

  expect(itemsInAccordian.length).toBe(5);
});

it("Should add items into cart inside Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Soups(5)");

  fireEvent.click(accordianHeader);

  const itemsInAccordian = screen.getAllByTestId("foodItem");

  expect(itemsInAccordian.length).toBe(5);

  const addToCartBtns = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addToCartBtns[0]);

  const cartItemText = screen.getByText("Cart - (1 Items)");

  expect(cartItemText).toBeInTheDocument();

  fireEvent.click(addToCartBtns[0]);

  const cartItemTextSecond = screen.getByText("Cart - (2 Items)");

  expect(cartItemTextSecond).toBeInTheDocument();
});

it("Should validate added items available in Cart component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const itemsInCart = screen.getAllByTestId("foodItem");

  expect(itemsInCart.length).toBe(2);
});

it("Should validate Clear Cart removes the items in the Cart component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  const emptyCartText = screen.getByText(
    "Your cart is empty. Please add items to the cart!"
  );

  expect(emptyCartText).toBeInTheDocument();
});
